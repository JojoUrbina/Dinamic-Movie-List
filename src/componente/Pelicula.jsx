import React from 'react'

export default function Pelicula(props) {
  return (<div className="movie-item-style-2">
      <img src={props.imagen} alt="" />
      <div className="mv-item-infor">
        <h6>
          <a href="moviesingle.html">
          {props.titulo}   <span>(2012)</span>
          </a>
        </h6>
        <p className="rate">
          <i className="ion-android-star"></i>
          <span>{props.calificacion}</span> /10
        </p>
        <p className="describe">
          {props.children}
        </p>
        <p className="run-time">
          {" "}
          Run Time: {props.duracion}’ . <span>MMPA: PG-13 </span> .{" "}
          <span>Release: {props.fecha}</span>
        </p>
        <p>
          Director: <a href="#">{props.director}</a>
        </p>
        <p>
          Stars: <a href="#">{props.actores}</a>
        </p>
      </div>
    </div>
  );
}