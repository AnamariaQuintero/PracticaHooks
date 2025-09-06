import React from "react";

function HomeHooks(){
    return(
        <div className="container justify-content-center align-center vh-100">
            <div className="text-center">
                <h2>Ejemplos de Hooks</h2>
                <div className="table-responsive">
                <table className="table table-bordered text-center align-middle">
                    <thead className="table-dark">
                    <tr>
                        <th>Hook</th>
                        <th>Ruta</th>
                        <th>Descripción</th>
                        <th>Categoría</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td><strong>useDebugValue</strong></td>
                        <td>
                        <a href="/useDebugValue" className="btn btn-primary">Ir a ejemplo</a>
                        </td>
                        <td>Poner descripción</td>
                        <td>Debug</td>
                    </tr>
                    <tr>
                        <td><strong>useState</strong></td>
                        <td>
                        <a href="/useState" className="btn btn-primary">Ir a ejemplo</a>
                        </td>
                        <td>Maneja el estado dentro de un componente funcional.</td>
                        <td>Estado</td>
                    </tr>
                    <tr>
                        <td><strong>useNavigate</strong></td>
                        <td>
                        <a href="/useNavigate" className="btn btn-primary">Ir a ejemplo</a>
                        </td>
                        <td>Permite navegar entre rutas en React Router.</td>
                        <td>Navegación</td>
                    </tr>
                    <tr>
                        <td><strong>useReducer</strong></td>
                        <td>
                        <a href="/useReducer" className="btn btn-primary">Ir a ejemplo</a>
                        </td>
                        <td>Permite agregar un reductor al componente.</td>
                        <td>Estado</td>
                    </tr>
                    <tr>
                        <td><strong>useRef</strong></td>
                        <td>
                        <a href="/useRef" className="btn btn-primary">Ir a ejemplo</a>
                        </td>
                        <td>Poner descripción</td>
                        <td>Referencias</td>
                    </tr>
                    <tr>
                        <td><strong>useImperativeHandle</strong></td>
                        <td>
                        <a href="/useImperativeHandle" className="btn btn-primary">Ir a ejemplo</a>
                        </td>
                        <td>Poner descripción</td>
                        <td>Referencias</td>
                    </tr>
                    <tr>
                        <td><strong>useMemo</strong></td>
                        <td>
                        <a href="/useMemo" className="btn btn-primary">Ir a ejemplo</a>
                        </td>
                        <td>Poner descripción</td>
                        <td>Performance</td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </div>
        </div>

    );
}

export default HomeHooks;