import logo from "./logo.svg";
import "./App.css";
import Pelicula from "./componente/Pelicula";
import PageWrapper from "./PageWrapper";
import peliculasJson from "./peliculas.json"
import Paginacion from "./Paginacion";
import { useState } from 'react'

function App() {
  let peliculas = peliculasJson;
  const [paginaActual, setPaginaActual] = useState(1)
  return (
    <PageWrapper>
      {peliculas.map((pelicula) => (
        <Pelicula
          titulo={pelicula.titulo}
          calificacion={pelicula.descripcion}
          director={pelicula.director}
          actores={pelicula.actores}
          fecha={pelicula.fecha}
          duracion={pelicula.duracion}
          imagen={pelicula.imagen}
          descripcion={pelicula.descripcion}
        />
      ))}
      <Paginacion pagina={paginaActual} total={4} onChange={(pagina)=> setPaginaActual(pagina)}/>
    </PageWrapper>
  );
}

export default App;
