import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";

// import logo from '../logo.svg';

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
                      <MDBDropdown>
                        <MDBDropdownToggle caret color="warning" className="btn btn-sm">
                          <i className="fas fa-cart-plus"></i>
                        </MDBDropdownToggle>
                        <MDBDropdownMenu style={{width: "320px"}}>
                          {/* <MDBDropdownItem>Action</MDBDropdownItem> */}
                          <div className="container">
                            <div className="row">
                              <div className="col-12">
                                <h6 className="text-warning font-weight-bold">title</h6>
                                <span className="text-muted"> price </span>
                              </div>
                            </div>
                          
                          
                            <div className="row">
                              <div className="col-12">
                                <button className="btn btn-sm btn-light btn-block">-</button>
                              </div>
                            </div>
                          </div>

                          <div className="container">
                            <div className="row">
                              <div className="col-12">
                                <h6 className="text-warning font-weight-bold">title</h6>
                                <span className="text-muted"> price </span>
                              </div>
                            </div>
                          
                          
                            <div className="row">
                              <div className="col-12">
                                <button className="btn btn-sm btn-light btn-block">-</button>
                              </div>
                            </div>
                          </div>
                          
                          {/* <MDBDropdownItem>Separated link</MDBDropdownItem> */}
                        </MDBDropdownMenu>
                      </MDBDropdown>
                    </div>
                    
                </div>
            </nav>
        )
    }
}

export default Navbar;