import { Link } from "react-router-dom";
import { useActionState } from "react";

function HookUseActionState() {
  // Acción muy simple
  async function accion(prevState) {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // simular espera
    return prevState + 1; // cada vez suma 1
  }

  // useActionState recibe la acción y un estado inicial (0)
  const [count, formAction, isPending] = useActionState(accion, 0);

  return (
    <div className="container justify-content-center align-center vh-100">
      <div className="text-center">
        <h2>Ejemplos de UseActionState</h2>

        <form action={formAction}>
          <button type="submit" className="btn btn-primary" disabled={isPending}>
            {isPending ? "Cargando..." : "Sumar 1"}
          </button>
        </form>

        <p className="mt-3">Contador: {count}</p>

        <Link to="/" className="list-group-item rounded bg-primary m-3 text-center text-white"> Ir al Home</Link>
      </div>
    </div>
  );
}

export default HookUseActionState;
