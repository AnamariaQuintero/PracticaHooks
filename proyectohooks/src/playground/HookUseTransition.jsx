import { useState, useTransition } from "react";
import { Link } from "react-router-dom";

function HookUseNavigate(){

    const [texto, setTexto] = useState("");
    const [estado, startTransition] = useTransition();

    const handleChange = (e) => {
        const value = e.target.value;
        
        startTransition(() => {
            setTexto(value);
        });
    };

    return(
        <div className="container justify-content-center align-center vh-100">
            <div className="text-center">
                <h2>Ejemplo de UseTransition</h2>

                <input type="text" onChange={handleChange} className="form-control m-2"placeholder="Escribe algo"/>

                {estado ? <p className="text-warning">Actualizando...</p>:<p>Has escrito: {texto}</p>}

                <Link to="/" className="list-group-item rounded bg-primary m-3 text-center">Ir a casa</Link>
            </div>
        </div>
    );
}

export default HookUseNavigate;
