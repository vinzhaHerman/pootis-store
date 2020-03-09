import React, { Component } from 'react';
import { ProductConsumer } from '../../data.context';
import { Link } from 'react-router-dom';

import { MDBContainer } from "mdbreact";

export default class Modal extends Component {
    render(){
        return (
            <ProductConsumer>
                {(value) => {
                    const { modalOpen, closeModal } = value;
                    const { title } = value.modalProduct;

                    if(!modalOpen) {
                        return null;
                    }
                    else {
                        return(
                            <MDBContainer
                                style={{
                                    width: "auto",
                                    position: "fixed",
                                    top: "10px",
                                    right: "10px",
                                    zIndex: 9999
                                }}
                            >
                                {/* <MDBNotification
                                    show
                                    fade
                                    iconClassName="text-primary"
                                    title="Item Added!"
                                    message={title}
                                    style={{
                                        width: "320px"
                                    }}
                                /> */}
                                <div className="card">
                                  <div className="card-body">
                                    <h5 className="card-title">Item Added!</h5>
                                    <p>{title}</p>
                                    <button className="btn btn-sm" onClick={()=>closeModal()}>Continue Shopping</button>
                                    <Link to="/cart"><button className="btn btn-primary peach-gradient btn-sm" onClick={()=>closeModal()}>Go to cart</button></Link>
                                  </div>
                                </div>
                            </MDBContainer>
                        )
                    }
                }}

            </ProductConsumer>
        )
    }
}