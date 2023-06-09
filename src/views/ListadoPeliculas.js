import "../index.css";
import Pelicula from "../componente/Pelicula";
import PageWrapper from "./PageWrapper";
import Paginacion from "./Paginacion";
import { useState,useEffect } from "react";

function ListadoPeliculas() {
  const [paginaActual, setPaginaActual] = useState(1);
  const [peliculas, setPeliculas] = useState([]);
  const TOTAL_POR_PAGINA = 4;
  useEffect(()=>{
    buscarPeliculas();
  },[])

  const buscarPeliculas = async () => {
    let url =
      "https://cors-anywhere.herokuapp.com/https://lucasmoy-dev.github.io/data/react/peliculas.json";
    let respuesta = await fetch(url, {
      method: "GET",
      
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Origin: "https://lucasmoy-dev.github.io",
      },
    });
    let json = await respuesta.json();
    setPeliculas(json);
  };

 let peliculasPorPagina= peliculas.slice(
  (paginaActual - 1) * TOTAL_POR_PAGINA,
  paginaActual * TOTAL_POR_PAGINA
 );
 

  const getTotalPaginas = () => {
    let cantidadTotalDePeliculas = peliculas.length;
    return Math.ceil(cantidadTotalDePeliculas / TOTAL_POR_PAGINA);
  };
  
  return (
    <PageWrapper>
      {peliculasPorPagina.map((pelicula) => (
        <Pelicula
          titulo={pelicula.titulo}
          calificacion={pelicula.descripcion}
          director={pelicula.director}
          actores={pelicula.actores}
          fecha={pelicula.fecha}
          duracion={pelicula.duracion}
          img={pelicula.img}
          descripcion={pelicula.descripcion}
        />
      ))}
      <Paginacion
        pagina={paginaActual}
        total={getTotalPaginas()}
        onChange={(pagina) => setPaginaActual(pagina)}
      />
    </PageWrapper>
  );
}

export default ListadoPeliculas;
