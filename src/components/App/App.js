import PropTypes from "prop-types";
import { Routes, Route} from 'react-router-dom';
import Header from '../Header/Header';
import Home from '../../Pages/Home/Home';
import NotFound from '../../Pages/NotFound/NotFound';
import About from '../../Pages/About/About';
import './App.scss';
import Property from '../../Pages/Property/Property';
import Footer from '../Footer/Footer';
import Api from '../../Utils/api.json';


function App() {
  return (
    <div className="kasa-app">
      <Header />
      <Routes>
        {/* On récupère l'Api dans les pages correspondantes */}
        <Route path='/' element={<Home Api={Api}/>} />
        <Route path='/home' element={<Home Api={Api}/>} />
        <Route path='/about' element={<About />} />
        <Route path='/property/:id' element={<Property Api={Api} />} /> 
        <Route path='/*' element={<NotFound />} /> 
        <Route path='/NotFound' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

App.protoTypes = {
  Api: PropTypes.array.isRequired
}

export default App;