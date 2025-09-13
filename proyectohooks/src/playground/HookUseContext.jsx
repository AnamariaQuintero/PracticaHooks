import { Link } from "react-router-dom";
import { createContext, useContext } from "react";

//Crear un contexto
const ColorContext = createContext("blue");

function HookUseContext() {
  // Consumir el contexto
  const color = useContext(ColorContext);

  return (
    //Proveer el contexto
    <ColorContext.Provider value="green">
      <div className="container justify-content-center align-center vh-100">
        <div className="text-center">
          <h2 style={{ color }}>Ejemplos de UseContext</h2>
          <Link to="/" className="list-group-item rounded bg-primary m-3 text-center text-white"> Ir al Home</Link>
        </div>
      </div>
    </ColorContext.Provider>
  );
}

export default HookUseContext;
