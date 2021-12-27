import { Route } from "react-router"
import Getiryemek from "./Component/getiryemek"
import Home from './Component/home'
import AdminApp from './AdminApp'
import '../src/index.css'


const Section = () => {
    return (
        <section>

            <Route exact path="/">
                <Home />
            </Route>

            <Route   path="/getiryemek">
                <Getiryemek />
            </Route>

            
            <Route   path="/admin">
                <AdminApp />
            </Route>

       
        </section>
    )


}

export default Section