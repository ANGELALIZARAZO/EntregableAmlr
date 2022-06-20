import { useState } from "react";
import Cabecera from "./components/Cabecera";
import Listado from "./components/Listado";

function App() {
  const [contador, setContador] = useState(0);
  const acumulador = () => {
    setContador((prevState) => prevState + 1);
  };

  return (
    <div className="App">
      <Cabecera contador={contador} />
      <Listado acumulador={acumulador} />
    </div>
  );
}
export default App;
