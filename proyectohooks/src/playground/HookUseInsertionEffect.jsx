import { Link } from "react-router-dom";
import { useInsertionEffect } from "react";

function HookUseInsertionEffect() {
  // Insertamos un estilo con useInsertionEffect
  useInsertionEffect(() => {
    const styleTag = document.createElement("style");
    styleTag.innerHTML = `
      .titulo {
        color: purple;
        font-size: 28px;
        font-weight: bold;
      }
    `;
    document.head.appendChild(styleTag);

    // limpiar al desmontar
    return () => {
      document.head.removeChild(styleTag);
    };
  }, []);

  return (
    <div className="container justify-content-center aling-center vh-100">
      <div className="text-center">
        <h2 className="titulo">Ejemplos de UseInsertionEffect</h2>
        <Link to="/" className="list-group-item rounded bg-primary m-3 text-center">Ir al home</Link>
      </div>
    </div>
  );
}

export default HookUseInsertionEffect;
