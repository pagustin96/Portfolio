import {Route, Routes, BrowserRouter} from 'react-router-dom'
import { Header } from '../components/Header'
import { About } from '../components/About'
import { Contact } from '../components/Contact'
import { Home } from '../components/Home'
import { Portfolio } from '../components/Portfolio'

export const RouterPrincipal = () => {


    return(
        <BrowserRouter>

            <Header/>

            <Routes>
                
                <Route path='/' element={ <Home/> } />
                <Route path='/about' element={ <About/> } />
                <Route path='/portfolio' element={ <Portfolio/> } />
                <Route path='/contact' element={ <Contact/> } />

            </Routes>
        </BrowserRouter>
    )
}
