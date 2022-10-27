import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Home from '../../Pages/Home/Home';
import NotFound from '../../Pages/NotFound/NotFound';
import About from '../../Pages/About/About';
import './App.scss';
import Property from '../../Pages/Property/Property';
import Footer from '../Footer/Footer';


function App() {
  return (
    <div className="kasa-app">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} /> 
        <Route path='/property:id' element={<Property />} /> 
        <Route path='/*' element={<NotFound />} /> 
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
