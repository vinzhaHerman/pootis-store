import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import logo from '../logo.svg';

import { ProductConsumer } from '../data.context';

class Navbar extends Component {
    render(){
        return(
            
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-warning peach-gradient">
                <div className="container">
                    <Link to="/"><span className="navbar-brand">Pootis in Store</span></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <Link to="/" className="nav-link">Products</Link>
                        </li>
                      </ul>
                      <Link to="/cart" className="ml-auto">
                        <ProductConsumer>
                          {value => {
                            const { cart } = value;
                              return(
                                <button className="btn btn-sm btn-light"><i className="fas fa-cart-plus"></i> ({ cart.length })</button>
                              )
                          }}
                        </ProductConsumer>
                      </Link>
                    </div>
                    
                </div>
            </nav>
        )
    }
}

export default Navbar;