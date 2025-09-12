import React from "react";
import { Link } from "react-router-dom";

function HomeHooks(){
    return(
        <div className="container justify-content-center align-center vh-100%">
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
                        <Link to="/useDebugValue" className="btn btn-primary">Ir a ejemplo</Link>
                        </td>
                        <td>Poner descripción</td>
                        <td>Debug</td>
                    </tr>
                    <tr>
                        <td><strong>useState</strong></td>
                        <td>
                        <Link to="/useState" className="btn btn-primary">Ir a ejemplo</Link>
                        </td>
                        <td>Maneja el estado dentro de un componente funcional.</td>
                        <td>Estado</td>
                    </tr>
                    <tr>
                        <td><strong>useNavigate</strong></td>
                        <td>
                        <Link to="/useNavigate" className="btn btn-primary">Ir a ejemplo</Link>
                        </td>
                        <td>Permite navegar entre rutas en React Router.</td>
                        <td>Navegación</td>
                    </tr>
                    <tr>
                        <td><strong>useReducer</strong></td>
                        <td>
                        <Link to="/useReducer" className="btn btn-primary">Ir a ejemplo</Link>
                        </td>
                        <td>Permite agregar un reductor al componente.</td>
                        <td>Estado</td>
                    </tr>
                    <tr>
                        <td><strong>useRef</strong></td>
                        <td>
                        <Link to="/useRef" className="btn btn-primary">Ir a ejemplo</Link>
                        </td>
                        <td>Crea referencias mutables que no provocan re-render.</td>
                        <td>Referencias</td>
                    </tr>
                    <tr>
                        <td><strong>useImperativeHandle</strong></td>
                        <td>
                        <Link to="/useImperativeHandle" className="btn btn-primary">Ir a ejemplo</Link>
                        </td>
                        <td>Personaliza el valor expuesto con ref en componentes.</td>
                        <td>Referencias</td>
                    </tr>
                    <tr>
                        <td><strong>useMemo</strong></td>
                        <td>
                        <Link to="/useMemo" className="btn btn-primary">Ir a ejemplo</Link>
                        </td>
                        <td>Memoriza valores calculados para optimizar rendimiento.</td>
                        <td>Performance</td>
                    </tr>
                    <tr>
                        <td><strong>useCallback</strong></td>
                        <td>
                        <Link to="/useCallback" className="btn btn-primary">Ir a ejemplo</Link>
                        </td>
                        <td>Memoriza funciones para evitar recrearlas en cada render.</td>
                        <td>Performance</td>
                    </tr>
                    <tr>
                        <td><strong>useTransition</strong></td>
                        <td>
                        <Link to="/useTransition" className="btn btn-primary">Ir a ejemplo</Link>
                        </td>
                        <td>Marca actualizaciones de estado como “transiciones” para mejorar la experiencia de usuario.</td>
                        <td>Performance</td>
                    </tr>
                    <tr>
                        <td><strong>useDeferredValue</strong></td>
                        <td>
                        <Link to="/useDeferredValue" className="btn btn-primary">Ir a ejemplo</Link>
                        </td>
                        <td>Muestra información en React DevTools para hooks personalizados.</td>
                        <td>Performance</td>
                    </tr>
                    <tr>
                        <td><strong>useEffect</strong></td>
                        <td>
                        <Link to="/useEffect" className="btn btn-primary">Ir a ejemplo</Link>
                        </td>
                        <td>Para librerías de estilos; inserta efectos justo antes de aplicar cambios al DOM.</td>
                        <td>Efectos</td>
                    </tr>
                    <tr>
                        <td><strong>useLayoutEffect</strong></td>
                        <td>
                        <Link to="/useLayoutEffect" className="btn btn-primary">Ir a ejemplo</Link>
                        </td>
                        <td>Igual a useEffect, pero se ejecuta sincrónicamente después del renderizado.</td>
                        <td>Efectos</td>
                    </tr>
                    <tr>
                        <td><strong>useInsertionEffect</strong></td>
                        <td>
                        <Link to="/useInsertionEffect" className="btn btn-primary">Ir a ejemplo</Link>
                        </td>
                        <td>Para librerías de estilos; inserta efectos justo antes de aplicar cambios al DOM.</td>
                        <td>Efectos</td>
                    </tr>
                    <tr>
                        <td><strong>useContext</strong></td>
                        <td>
                        <Link to="/useContext" className="btn btn-primary">Ir a ejemplo</Link>
                        </td>
                        <td>Consume valores de un contexto sin necesidad de Context.Consumer.</td>
                        <td>Contexto y uso externo</td>
                    </tr>
                    <tr>
                        <td><strong>useSyncExternalStore</strong></td>
                        <td>
                        <Link to="/useSyncExternalStore" className="btn btn-primary">Ir a ejemplo</Link>
                        </td>
                        <td>Se conecta de forma segura a stores externos con soporte para concurrencia.</td>
                        <td>Contexto y uso externo</td>
                    </tr>
                    <tr>
                        <td><strong>useId</strong></td>
                        <td>
                        <Link to="/useId" className="btn btn-primary">Ir a ejemplo</Link>
                        </td>
                        <td>Genera identificadores únicos y estables (útil en accesibilidad y formularios).</td>
                        <td>Contexto y uso externo</td>
                    </tr>
                    <tr>
                        <td><strong>use</strong></td>
                        <td>
                        <Link to="/use" className="btn btn-primary">Ir a ejemplo</Link>
                        </td>
                        <td>Es una API que permite leer el valor de un recurso como una promesa o contexto.</td>
                        <td>Nuevos en React</td>
                    </tr>
                    <tr>
                        <td><strong>useOptimistic</strong></td>
                        <td>
                        <Link to="/useOptimistic" className="btn btn-primary">Ir a ejemplo</Link>
                        </td>
                        <td>Permite manejar estados optimistas mientras se esperan respuestas del servidor.</td>
                        <td>Nuevos en React</td>
                    </tr>
                    <tr>
                        <td><strong>useFormStatus</strong></td>
                        <td>
                        <Link to="/useFormStatus" className="btn btn-primary">Ir a ejemplo</Link>
                        </td>
                        <td>Provee el estado de un formulario en server actions.</td>
                        <td>Nuevos en React</td>
                    </tr>
                    <tr>
                        <td><strong>useActionState</strong></td>
                        <td>
                        <Link to="/useActionState" className="btn btn-primary">Ir a ejemplo</Link>
                        </td>
                        <td>Maneja el estado y resultado de acciones enviadas al servidor.</td>
                        <td>Nuevos en React</td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </div>
        </div>

    );
}

export default HomeHooks;