import React from "react";
import "./Cabecera.css";

export default function Cabecera({ contador }) {
  return (
    <header>
      <h1>Carrito de Compras</h1>
      <p>
        Cantidad de Productos <span> {contador} </span>{" "}
      </p>
    </header>
  );
}
