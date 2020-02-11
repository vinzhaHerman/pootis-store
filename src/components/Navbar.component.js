import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from '../logo.svg';

class Navbar extends Component {
    render(){
        return(
            
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link to="/"><span className="navbar-brand">Pootis</span></Link>
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
                        <button className="btn btn-sm btn-outline-primary"><i className="fas fa-cart-plus"></i></button>
                      </Link>
                    </div>
                    
                </div>
            </nav>
        )
    }
}

export default Navbar;