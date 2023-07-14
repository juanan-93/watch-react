
import React from 'react';
import Header from './components/Header/header.jsx';
import Slider from './components/Slider/slider.jsx';
import Carrusel from './components/Carrusel/carrusel.jsx';
import Product from './components/Product/product.jsx';
import Footer from './components/Footer/footer.jsx';
import Faqs from './components/Faqs/faqs.jsx';


function App() {
  return (
    <div className="App">

      <Header/>
      <Slider/>
      <Carrusel/>
      <Product/>
      <Footer/>
      <Faqs/>
    
      
    </div>
  );
}

export default App;
