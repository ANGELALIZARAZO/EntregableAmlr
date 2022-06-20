import { render } from "@testing-library/react";
import React from "react";
import data from "./data.json";
import Item from "./Item";

export default function Listado({ acumulador }) {
  return (
    <div className="container">
      {data.map((item) => (
        <Item
          key={item.id}
          productoNombre={item.producto.nombre}
          descripcion={item.producto.descripcion}
          stock={item.stock}
          acumulador={acumulador}
        />
      ))}
    </div>
  );
}
