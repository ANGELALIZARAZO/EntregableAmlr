import { useState } from "react";
import "./Item.css";

export default function Item({
  productoNombre,
  descripcion,
  stock,
  acumulador,
}) {
  const [stockP, setStockP] = useState(stock);

  const manejoBoton = () => {
    if (stockP > 1) {
      setStockP((prevState) => prevState - 1);
      acumulador();
    } else if (stockP === 1) {
      setStockP("agotado");
      acumulador();
    }
    function disabled(button) {
      let enabled = true;
      if (button.value === "") {
        enabled = false;
      }
    }
  };
  return (
    <div className="producto">
      <h3>{productoNombre}</h3>
      <p>{descripcion}</p>
      <h5>
       
        En stock <span>{stockP} </span>

      </h5>
      <button onClick={() => {manejoBoton();}} disabled = {stockP > 0 ? false: true}> Comprar

      </button>
    </div>
  );
}
