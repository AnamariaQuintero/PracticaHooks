import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HookUseState from './playground/HookUseState'
import HomeHooks from './playground/HomeHooks'
import HookUseNavigate from './playground/HookUseNavigate'
import HookUseReducer from './playground/HookUseReducer'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Vista Principal */}
        <Route path='/' element={<HomeHooks/>}></Route>
        {/* Rutas para componentes de hook  */}
        {/* <Route path='/useDebugValu' element={<HookUseDebugValue/>}></Route> */}
        <Route path='/useState' element={<HookUseState/>}></Route>
        <Route path='/useNavigate' element={<HookUseNavigate/>}></Route>
        <Route path='/useReducer' element={<HookUseReducer/>}></Route>
        {/* <Route path='/useRef' element={<HookUseRef/>}></Route> */}
        {/* <Route path='/useCallback' element={<HookUseCallback/>}></Route> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
