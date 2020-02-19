import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar.component';
import Productlist from './components/Productlist.component';
// import Product from './components/Product.component';
import Detail from './components/Detail.component';
import Cart from './components/Cart';
import Notfound from './components/Notfound.component';

import Modal from './components/modal/Modal.component';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Productlist} />
        <Route path="/details" component={Detail} />
        <Route path="/cart" component={Cart} />
        <Route  component={Notfound} />
      </Switch>
      <Modal />
    </React.Fragment>
  );
}

export default App;
