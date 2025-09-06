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
                        <td><strong>NuevoHook</strong></td>
                        <td>
                        <a href="/" className="btn btn-primary">Ir a ejemplo</a>
                        </td>
                        <td>Descripción breve del hook.</td>
                        <td>Categoría</td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </div>
        </div>

    );
}

export default HomeHooks;