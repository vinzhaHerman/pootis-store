import React, { Component } from 'react';
import { ProductConsumer } from '../data.context';
import { Link } from 'react-router-dom';

class Detail extends Component {
    render(){
        return(
            <ProductConsumer>
                {value => {
                    const { id, company, price, img, info, title, inCart } = value.detailProduct;
                    return(
                        <div className="container py-5">
                            <div className="row pt-5">
                                <div className="col-10">
                                    <h1>{ title }</h1>
                                </div>
                            </div>
                            <div className="row py-5 mx-auto justify-content-center">
                                <div className="col-lg-4 mx-auto d-flex justify-content-center">
                                    <img src={ img } alt="" className="img-fluid"/>
                                </div>
                                <div className="col-lg-8">
                                    <h4>Model: { title }</h4>
                                    <p>by: <span className="text-primary font-weight-bold text-capitalize">{ company }</span></p>
                                    <p>${ price }</p>
                                    <span className="font-weight-bold text-capitalize">Product info:</span>
                                    <p className="text-muted">{ info }</p>
                                    <div className="d-flex float-right">
                                        <Link to="/">
                                            <button className="btn">Back to Product</button>
                                        </Link>
                                        <Link to="/">
                                            <button 
                                                className="btn btn-warning"
                                                disabled={inCart?true:false}
                                                onClick={()=>{
                                                    value.addToCart(id)
                                                }}>
                                                    { inCart?"in Cart":"Add to Cart" }
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}

export default Detail;