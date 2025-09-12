// Aca esta un ejemplo es para probar que la ruta si funcione 
import { useState, useCallback } from "react";
import { Link } from "react-router-dom";

function HookUseNavigate(){

    const [contador, setContador] = useState(0);

    const incrementar = useCallback(() => {
        setContador((prev) => prev + 1);
    }, []);

    return(
        <div className="container justify-content-center align-center vh-100">
            <div className="text-center">
                <h2>Ejemplos de UseCallback</h2>

                <p>Contador: {contador}</p>
                
                <button onClick={incrementar} className="btn btn-success m-2">Aumentar</button>

                <Link to="/" className="list-group-item rounded bg-primary m-3 text-center">Ir a casa</Link>
            </div>
        </div>
    );
}

export default HookUseNavigate;
