
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import { About } from '../components/About'
import { Contact } from '../components/Contact'
import { Home } from '../components/Home'
import { Portfolio } from '../components/Portfolio'
import { TopBottom } from '../components/TopBottom'

export const RouterPrincipal = () => {


    return(
<>
    <Home />
    <About  />
    <TopBottom />
    <Portfolio />
    <Contact/>
</>
        

    )
}
