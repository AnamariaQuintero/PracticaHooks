import { useReducer } from "react";

// Reducer: define cómo cambia el estado
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
  // Estado inicial: { count: 0 }
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Contador: {state.count}</h2>

      <button onClick={() => dispatch({ type: "increment" })}>➕ Sumar</button>
      <button onClick={() => dispatch({ type: "decrement" })}>➖ Restar</button>
      <button onClick={() => dispatch({ type: "reset" })}>🔄 Reiniciar</button>
      <a href="/" className="list-group-item">Ir al Home</a>  
    </div>
  );
}
