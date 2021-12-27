import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import Header from './Component/Header'
import Section from './Section'

const App = () => {
  return (
    <Router>
      <>
        <div className="App">
          <Header />
          <Section />
        </div>
      </>


    </Router>
  )

}

export default App
