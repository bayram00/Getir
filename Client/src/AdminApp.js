import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom'
import AdminPanel from './AdminPanel/AdminPanel';
//Admin Section 
import AdminSectiom from './AdminPanel/AdminSection';
import './AdminApp.css'

const App = () => {
  return (
    <Router>
      <div className="AdminApp">
        <AdminPanel />
        <AdminSectiom />
      </div>
    </Router>
  )

}

export default App
