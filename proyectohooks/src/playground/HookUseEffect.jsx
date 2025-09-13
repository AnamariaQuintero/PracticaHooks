import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function HookUseEffect(){

    const [contador, setContador] = useState(1);

    useEffect(() => {
        document.title = `Contador: ${contador}`;
    }, [contador]);

    return(
        <div className="container justify-content-center align-center vh-100">
            <div className="text-center">
                <h2>Ejemplos de UseEffect</h2>

                <p>Contador: {contador}</p>
                <button onClick={() => setContador(contador + 1)} className="btn btn-success m-2">Aumentar</button>
                <Link to="/" className="list-group-item rounded bg-primary m-3 text-center">Ir al home</Link>
            </div>
        </div>
    );
}

export default HookUseEffect;
