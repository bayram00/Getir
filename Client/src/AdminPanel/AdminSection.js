import { Route } from "react-router"
import Admin from "./Admin";
import '../css/AdminCss/AdminSection.css'

import Slider from "../AdminPanel/Slider";
import Kategori from '../AdminPanel/Kategori'
import Kampanya from '../AdminPanel/Kampanya'
import Favori from '../AdminPanel/Favori'


const AdminSectiom = () => {
    return (
        <div className="AdminSection">
            <Route exact path="/admin">
                <Admin />
            </Route>

            <Route  path="/admin/slider">
                <Slider />
            </Route>

            <Route  path="/admin/kategori">
                < Kategori />
            </Route>

            <Route  path="/admin/kampanya">
                < Kampanya />
            </Route>

            <Route  path="/admin/favori">
                < Favori />
            </Route>
        </div>

    )
}

export default AdminSectiom