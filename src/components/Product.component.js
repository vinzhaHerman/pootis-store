import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { ProductConsumer } from '../data.context';

import '../App.css';

class Product extends Component {
    render(){

        const {id, title, img, price, inCart} = this.props.product;

        return(
            <div className="card col-lg-2 col-md-3 col-sm-10 m-4">

                <ProductConsumer>

                    {(value) => (
                        <React.Fragment>
                        <div className="view overlay">
                            <img className="card-img-top" src={img} alt="Card cap"></img>
                            <div className="mask rgba-white-slight d-flex justify-content-center align-items-center"
                                onClick={() => value.handleDetail(id)}>
                                <Link to="/details">
                                    <button className="btn btn-light btn-primary btn-sm">DETAIL</button>
                                </Link>
                            </div>
                        </div>

                    

                        <div className="card-body">
                            <h4 className="card-title">{title}</h4>
                            <div className="d-flex justify-content-between align-items-center">
                                <p className="card-text m-0">${price}</p>
                                <p className="card-text cart-mark">{inCart ? "in cart" : ""}</p>
                            </div>
                        </div>


                

                        <button type="button" className="btn btn-warning btn-sm mb-4"
                                disabled={inCart ? true : false}
                                onClick={() => {
                                    value.addToCart(id);
                                    value.closeModal(id);
                                    value.openModal(id);
                                }}
                                >Add to cart
                        </button>
                        </React.Fragment>
                    )}

                </ProductConsumer>

            </div>
        )
    }
}

Product.propTypes = {
    product:PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool
    }).isRequired
}

export default Product;