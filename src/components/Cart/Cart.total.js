import React from 'react';
import CartItem from './Cart.item';

export default function CartToal({value}) {

    const { cart, cartSubTotal, cartTax, cartTotal } = value;
    
    return(
        <div className="card my-2">
            <div class="card-header">
              TOTAL
            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div>Subtotal: <span className="font-weight-bold">${ cartSubTotal }</span></div>
                        <div>Tax: <span className="font-weight-bold">${ cartTax }</span></div>
                        <hr/>
                        <div>Total: <span className="font-weight-bold text-warning">${ cartTotal }</span></div>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="d-flex">
                            <button className="btn btn-light">Back to store</button>
                            <button className="btn btn-warning">Pay</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}