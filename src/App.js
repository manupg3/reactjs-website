import logo from './logo.svg';
import './App.css';
import {Link, Route, Routes} from 'react-router-dom'
import Home from './home';
import About from './about';
import Services from './services';
import Contact from './contact';
import Dashboard from './dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {
  return (
    <div className="App">
    {/* <h1>Welcome to React Router!</h1> */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="services" element={<Services />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="dashboard" element={<Dashboard />} />

    </Routes>
  </div>

  )
}
