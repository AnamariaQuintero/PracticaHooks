import { Link } from "react-router-dom";
import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      throw new Error("Acción no reconocida");
  }
  
}

export default function SimpleCounter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Contador: {state.count}</h2>

      <button onClick={() => dispatch({ type: "increment" })}>➕ Sumar</button>
      <button onClick={() => dispatch({ type: "decrement" })}>➖ Restar</button>
      <button onClick={() => dispatch({ type: "reset" })}>🔄 Reiniciar</button>
      <Link to="/" className="list-group-item rounded bg-primary m-3 text-center">Ir al home</Link> 
    </div>
  );
}
