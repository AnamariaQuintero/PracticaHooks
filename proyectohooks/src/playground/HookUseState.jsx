import { Link } from "react-router-dom";
import { useState } from "react";

function Contador(){
    const [count, setCount] = useState(0);

    // function aumentar(){
    //     setCount(count + 1);
    // }
    
    // function disminuir(){
    //     setCount(count - 1);

    // }

    return(
        <div>
            <div className="container text-center">
                <h1>Contador: {count}</h1>
                <div className="btn-group">
                    {/* <button onClick={aumentar} className="btn btn-success">Aumentar</button>
                    <button onClick={disminuir} className="btn btn-warning">Disminuir</button> */}
                    <button onClick={() => setCount(count + 1)} className="btn btn-success">Aumentar</button>
                    <button onClick={() => setCount(count - 1)} className="btn btn-warning">Disminuir</button>
                    <Link to="/" className="list-group-item rounded bg-primary m-3 text-center">Ir al home</Link> 
                </div>
            </div>
        </div>
    );

}

export default Contador;