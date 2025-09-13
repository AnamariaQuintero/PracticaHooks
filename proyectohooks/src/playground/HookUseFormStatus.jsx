import { Link } from "react-router-dom";
import { useFormStatus } from "react-dom";

function SubmitButton() {
  // useFormStatus nos dice si el formulario está enviando
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="btn btn-primary m-2"
    >
      {pending ? "Enviando..." : "Enviar"}
    </button>
  );
}

function HookUseFormStatus() {
  // Acción simulada que tarda 2 segundos
  async function handleSubmit(formData) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    alert("Formulario enviado con éxito ✅");
  }

  return (
    <div className="container justify-content-center align-center vh-100">
      <div className="text-center">
        <h2>Ejemplos de UseFormStatus</h2>

        <form action={handleSubmit}>
          <input
            type="text"
            name="nombre"
            placeholder="Escribe tu nombre"
            className="form-control m-2"
            required
          />
          <SubmitButton />
        </form>

        <Link to="/" className="list-group-item rounded bg-primary m-3 text-center">Ir al home</Link>
      </div>
    </div>
  );
}

export default HookUseFormStatus;
