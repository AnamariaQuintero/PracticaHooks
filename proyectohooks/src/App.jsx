import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HookUseState from './playground/HookUseState'
import HomeHooks from './playground/HomeHooks'
import HookUseNavigate from './playground/HookUseNavigate'
import HookUseReducer from './playground/HookUseReducer'
import HookUseDebugValue from './playground/HookUseDebugValue'
import HookUseRef from './playground/HookUseRef'
import HookUseImperativeHandle from './playground/HookUseImperativeHandle'
import HookUseMeno from './playground/HookUseMemo'
import HookUseCallback from './playground/HookUseCallback'
import HookUseTransition from './playground/HookUseTransition'
import HookUseDeferredValue from './playground/HookUseDeferredValue'
import HookUseEffect from './playground/HookUseEffect'
import HookUseLayoutEffect from './playground/HookUseLayoutEffect'
import HookUseInsertionEffect from './playground/HookUseInsertionEffect'
import HookUseContext from './playground/HookUseContext'
import HookUseSyncExternalStore from './playground/HookUseSyncExternalStore'
import HookUseId from './playground/HookUseId'
import HookUse from './playground/HookUse'
import HookUseOptimistic from './playground/HookUseOptimistic'
import HoohUseFormStatus from './playground/HookUseFormStatus'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Vista Principal */}
        <Route path='/' element={<HomeHooks/>}></Route>
        {/* Rutas para componentes de hook  */}
        <Route path='/useDebugValue' element={<HookUseDebugValue/>}></Route>
        <Route path='/useState' element={<HookUseState/>}></Route>
        <Route path='/useNavigate' element={<HookUseNavigate/>}></Route>
        <Route path='/useReducer' element={<HookUseReducer/>}></Route>
        <Route path='/useRef' element={<HookUseRef/>}></Route>
        <Route path='/useImperativeHandle' element={<HookUseImperativeHandle/>}></Route>
        <Route path='/useMemo' element={<HookUseMeno/>}></Route>
        <Route path='/useCallback' element={<HookUseCallback/>}></Route>
        <Route path='/useTransition' element={<HookUseTransition/>}></Route>
        <Route path='/useDeferredValue' element={<HookUseDeferredValue/>}></Route>
        <Route path='/useEffect' element={<HookUseEffect/>}></Route>
        <Route path='/useLayoutEffect' element={<HookUseLayoutEffect/>}></Route>
        <Route path='/useInsertionEffect' element={<HookUseInsertionEffect/>}></Route>
        <Route path='/useContext' element={<HookUseContext/>}></Route>
        <Route path='/useSyncExternalStore' element={<HookUseSyncExternalStore/>}></Route>
        <Route path='/useId' element={<HookUseId/>}></Route>
        <Route path='/use' element={<HookUse/>}></Route>
        <Route path='/useOptimistic' element={<HookUseOptimistic/>}></Route>
        <Route path='/useFormStatus' element={<HoohUseFormStatus/>}></Route>
        <Route path='/useActionStatus' element={<HoohUseFormStatus/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
