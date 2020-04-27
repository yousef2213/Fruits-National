import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import Home from './pages/Home'
import About from './pages/AboutPage'
import Products from './pages/ProductsPage'
import ContactPage from './pages/ContactPage'
import SingleProducts from './pages/SingleProduct'
import Default from './pages/Default'
import Cart from './pages/CartPage'

import { Route , Switch} from 'react-router-dom'

import Footer from './components/Footer'
import Navbar from './components/Navbar'
import SideBar from './components/Sidebar'
import SideCart from './components/Sidecart'
import SideTop from './components/SideTop'

function App() {
  
  return (
    <>
    <Navbar />
    <SideBar />
    <SideCart />
    <div className="d-none d-lg-block "><SideTop /></div>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/Fruits" exact component={Products} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/Cart" component={Cart} />
      <Route path="/Fruits/:id" component={SingleProducts} />
      <Route component={Default} />
    </Switch>

    <Footer />
    </>
  );
}

export default App;
