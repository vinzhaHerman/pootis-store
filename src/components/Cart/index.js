import React, { Component } from 'react';
import CartContent from './Cart.content';
import CartEmpty from './Cart.empty';
import CartTotal from './Cart.total';

import { ProductConsumer } from '../../data.context';

class Cart extends Component {
    render(){
        return(
            <div className="container py-5">
                
                <ProductConsumer>
                    {value => {
                        const { cart, clearCart } = value;
                        if(cart.length>0){
                            return(
                                <React.Fragment>
                                <div className="row pt-5">
                                    <div className="col-lg-8 col-sm-12 d-flex justify-content-between">
                                        <h1 className="text-muted">Your Cart</h1>
                                        <button className="btn btn-sm btn-danger"
                                                onClick={() => clearCart()}>clear cart</button>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-8 col-md-12 col-sm-12">
                                        <CartContent value={value}/>
                                    </div>
                                    <div className="col-lg-4 col-md-12 col-sm-12">
                                        <CartTotal value={value}/>
                                    </div>
                                </div>
                                </React.Fragment>
                            );
                        }
                        else{
                            return (
                                <div className="row pt-5">
                                    <div className="col-lg-8 col-sm-12">
                                        <h1 className="text-muted">Your Cart</h1>
                                        <CartEmpty />
                                    </div>
                                </div>
                            );
                        }
                    }}
                </ProductConsumer>
            </div>
        )
    }
}

export default Cart ;