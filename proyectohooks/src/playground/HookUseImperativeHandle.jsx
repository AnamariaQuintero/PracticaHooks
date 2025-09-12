//useImperativeHandle se usa junto con forwardRef para exponer funciones desde un componente hijo al padre
import { useImperativeHandle, useRef, forwardRef } from 'react';
import { Link } from "react-router-dom";

const Child = forwardRef((props, ref) => {
    const mensaje = () => {
        alert("Soy una función expuesta con useImperativeHandle");
    };

    useImperativeHandle(ref, () => ({
        mostrarMensaje: mensaje
    }));

});

function HookUseNavigate(){

    const childRef = useRef();

    return(
        <div className="container justify-content-center align-center vh-100">
            <div className="text-center">
                <h2>Ejemplos de UseImperative</h2>
                <button onClick={() => childRef.current.mostrarMensaje()} className="btn btn-success m-2">Presiona aquí </button>

                <Child ref={childRef} />

                <Link to="/" className="list-group-item rounded bg-primary m-3 text-center">ir a casa</Link>
            </div>
        </div>
    );
}

export default HookUseNavigate;


