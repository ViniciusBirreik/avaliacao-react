import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/home'
import Errands from './pages/errands'
import Loggin from './pages/loggin'
import Registration from './pages/registration'

export default function Routers() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/registration' element={<Registration/>} />
                <Route path='/login' element={<Loggin/>} />
                <Route path='/errands' element={<Errands/>} />
            </Routes>
        </BrowserRouter>
    )
}