import '../css/AdminCss/AdminPanel.css'
import { Link } from 'react-router-dom'
import ReturnHome from '../img/back.png'
const AdminPanel = () => {
    return (
        <div className="AdminPanel">
            <div className="Title">
                <h1>Admin Panell</h1>
            </div>
            <div className="Content-Router">
                <button><Link to="/admin/slider">Slider</Link></button>
                <button><Link to="/admin/kategori">Kategori</Link></button>
                <button><Link to="/admin/kampanya">Kampanya</Link></button>
                <button><Link to="/admin/favori">Favori</Link></button>
            </div>
            <div className="Router">
                <a href="/"><img width="50" src={ReturnHome} alt="" /> Home</a>
            </div>
        </div>
    )
}

export default AdminPanel