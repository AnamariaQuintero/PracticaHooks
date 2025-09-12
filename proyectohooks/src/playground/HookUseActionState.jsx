// Aca esta un ejemplo es para probar que la ruta si funcione 

import { Link, useNavigate } from "react-router-dom";

function HookUseNavigate(){
    const navigate = useNavigate(); 

    function GoRoute(){
        navigate('/useState')
    }

    return(
        <div className="container justify-content-center aling-center vh-100">
            <div className="text-center">
                <h2>Ejemplos de UseActionState</h2>
                <a href="/" className="list-group-item">Ir al Home</a>
            </div>
        </div>
    );
}

export default HookUseNavigate;