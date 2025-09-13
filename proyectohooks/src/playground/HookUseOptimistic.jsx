import { Link } from "react-router-dom";
import { useOptimistic, useState } from "react";

function HookUseOptimistic() {
  const [comments, setComments] = useState([]);
  const [optimisticComments, addOptimisticComment] = useOptimistic(
    comments,
    (state, newComment) => [...state, { text: newComment, pending: true }]
  );

  function handleAddComment() {
    const newComment = "Nuevo comentario";
    // Mostrar optimistamente en la UI
    addOptimisticComment(newComment);

    // Simular "guardar en el servidor"
    setTimeout(() => {
      setComments((prev) => [...prev, { text: newComment, pending: false }]);
    }, 1500);
  }

  return (
    <div className="container justify-content-center align-center vh-100">
      <div className="text-center">
        <h2>Ejemplos de UseOptimistic</h2>

        <button className="btn btn-success m-2" onClick={handleAddComment}>
          Agregar comentario
        </button>

        <ul className="list-group">
          {optimisticComments.map((c, i) => (
            <li
              key={i}
              className={`list-group-item ${
                c.pending ? "text-muted" : "text-dark"
              }`}
            >
              {c.text} {c.pending && "(pendiente...)"}
            </li>
          ))}
        </ul>

        <Link to="/" className="list-group-item rounded bg-primary m-3 text-center">Ir al home</Link>
      </div>
    </div>
  );
}

export default HookUseOptimistic;
