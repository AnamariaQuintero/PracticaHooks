import { useRef } from 'react';
import { Link } from "react-router-dom";

function HookUseNavigate(){

    const cont = useRef(20);

    return(
        <div className="container justify-content-center aling-center vh-100">
            <div className="text-center">
                <h2>Ejemplos de UseRef</h2>
                <p>Aqui motramos el valor de cont: {cont.current}</p>
                <Link to="/" className="list-group-item rounded bg-primary m-3 text-center">Ir al home</Link> 
            </div>
        </div>
    );
}

export default HookUseNavigate;

