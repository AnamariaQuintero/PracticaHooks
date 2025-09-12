import react, {useDebugValue} from "react";
import { Link } from "react-router-dom";

function estado (value){

    useDebugValue(value ? 'Online' : 'Offline');
    return value;

}

function HookUseDebugValue(){

    const estad = estado(true);

    return(
        <div className="container justify-content-center aling-center vh-100">
            <div className="text-center">
                <h2>Ejemplos de UseDebugValue</h2>
                <p>estado: {estad? "activo" : "inactivo"} </p>
                <Link to="/" className="list-group-item rounded bg-primary m-3 text-center">Ir al home</Link>
            </div>
        </div>
    );
}

export default HookUseDebugValue;
