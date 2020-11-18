import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/pages/HomePage/Home'
import Footer from './Components/pages/Footer.js/Footer'
import Clientes from './Components/pages/Clientes/Clientes'
import Ingredientes from './Components/pages/Ingredientes/Ingredientes'
import Pedidos from './Components/pages/Pedidos/Pedidos'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/Clientes' exact component={Clientes} />
        <Route path='/Ingredientes' exact component={Ingredientes} />
        <Route path='/Pedidos' exact component={Pedidos} />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
