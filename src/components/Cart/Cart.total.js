import React from 'react';
import PaypalBtn from './Paypal.pay';

export default function CartToal({value, history}) {

    const { cartSubTotal, cartTax, cartTotal, clearCart } = value;
    
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
                        <div>Total: <span className="font-weight-bold deep-orange-text">${ cartTotal }</span></div>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                            {/* <button className="btn btn-warning">Pay</button> */}
                            <PaypalBtn total={cartTotal} clearCart={clearCart} history={history} />
                    </div>
                </div>
            </div>
        </div>
    )
}