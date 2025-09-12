//useMemo se usa para memorizar un cálculo costoso y evitar que se ejecute en cada render
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

function HookUseNavigate(){

    const [numero, setNumero] = useState(1);

    const factorial = useMemo(() => {
        let resultado = 1;
        for(let i = 1; i <= numero; i++){
            resultado *= i;
        }
        return resultado;
    }, [numero]);

    return(
        <div className="container justify-content-center align-center vh-100">
            <div className="text-center">
                <h2>Ejemplos de UseMemo</h2>
                
                <p>El factorial de {numero} es: {factorial}</p>
                
                <button className="btn btn-success m-2"onClick={() => setNumero(numero + 1)}>Aumentar número</button>

                <Link to="/" className="list-group-item rounded bg-primary m-3 text-center">Ir a casa</Link>
            </div>
        </div>
    );
}

export default HookUseNavigate;
