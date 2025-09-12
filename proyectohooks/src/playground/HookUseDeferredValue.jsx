import { useState, useDeferredValue } from "react";
import { Link } from "react-router-dom";

function HookUseNavigate(){

    const [texto, setTexto] = useState("");
    const textoDiferido = useDeferredValue(texto);

    return(
        <div className="container justify-content-center align-center vh-100">
            <div className="text-center">
                <h2>Ejemplos de UseDeferredValue</h2>

                <input type="text" value={texto} onChange={(e) => setTexto(e.target.value)} className="form-control m-2"placeholder="Escribe algo..."/>

                <p>Valor inmediato: {texto}</p>
        
                <p className="text-info">Valor diferido: {textoDiferido}</p>

                <Link to="/" className="list-group-item rounded bg-primary m-3 text-center">Ir a casa</Link>
            </div>
        </div>
    );
}

export default HookUseNavigate;
