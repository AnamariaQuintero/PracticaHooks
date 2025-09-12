import { Link } from "react-router-dom";
import { useLayoutEffect, useState } from "react";

function HookUseLayoutEffect() {
  const [mensaje, setMensaje] = useState("Cargando...");

  useLayoutEffect(() => {
    // Se ejecuta justo después de que el DOM esté actualizado
    setMensaje("useLayoutEffect ya se ejecutó ✅");
  }, []);

  return (
    <div className="container justify-content-center align-center vh-100">
      <div className="text-center">
        <h2>Ejemplos de UseLayoutEffect</h2>
        <p>{mensaje}</p> {/* Mostramos el mensaje actualizado */}
        <Link to="/" className="list-group-item rounded bg-primary m-3 text-center">Ir al home</Link>
      </div>
    </div>
  );
}

export default HookUseLayoutEffect;
