import { Link } from "react-router-dom";
import { useSyncExternalStore } from "react";

// función para suscribirse al cambio de tamaño
function subscribe(callback) {
  window.addEventListener("resize", callback);
  return () => window.removeEventListener("resize", callback);
}

function HookUseSyncExternalStore() {
  // useSyncExternalStore necesita:
  // 1. cómo suscribirse
  // 2. cómo leer el valor actual
  // 3. cómo leer el valor en servidor (para SSR, aquí devolvemos un valor fijo)
  const width = useSyncExternalStore(
    subscribe,
    () => window.innerWidth,
    () => 1024 // valor por defecto en SSR
  );

  return (
    <div className="container justify-content-center aling-center vh-100">
      <div className="text-center">
        <h2>Ejemplos de UseSyncExternalStore</h2>
        <p>Ancho actual de la ventana: {width}px</p>
        <Link to="/" className="list-group-item rounded bg-primary m-3 text-center">Ir al home</Link> 
      </div>
    </div>
  );
}

export default HookUseSyncExternalStore;
