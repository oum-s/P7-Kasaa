import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Home from '../../Pages/Home/Home';
import NotFound from '../../Pages/NotFound/NotFound';
import About from '../../Pages/About/About';
import './App.scss';
import Property from '../../Pages/Property/Property';
import Footer from '../Footer/Footer';
import Api from '../../Utils/api.json';


function App() {
 /*  const pathname = window.location.pathname;
  console.log(pathname);
 */
  /* function currentParams() {
    const params = pathname.split("/")[2];
    const id = Api.find((i) => i.id === params)
    console.log(params, id, Api.indexOf(id));
    return Api.indexOf(id);
  }
 */
  return (
    <div className="kasa-app">
      <Header />
      <Routes>
        <Route path='/' element={<Home Api={Api}/>} />
        <Route path='/about' element={<About />} />
        <Route path='/property/:id' element={<Property Api={Api} />} /> 
        <Route path='/*' element={<NotFound />} /> 
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
