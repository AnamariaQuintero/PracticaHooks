import { Link } from "react-router-dom";
import { useId } from "react";

function HookUseId() {
  // Genera un ID único
  const inputId = useId();

  return (
    <div className="container justify-content-center align-center vh-100">
      <div className="text-center">
        <h2>Ejemplos de UseId</h2>

        {/* Input asociado a su label usando useId */}
        <label htmlFor={inputId}>Escribe tu nombre:</label>
        <input id={inputId} type="text" className="form-control m-2" />

        <Link to="/" className="list-group-item rounded bg-primary m-3 text-center">Ir al home</Link>
      </div>
    </div>
  );
}

export default HookUseId;
