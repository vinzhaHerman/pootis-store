import React, { Component } from 'react';

class CartEmpty extends Component {
    render(){
        return(
            <div className="row">
                <div className="col-lg-10">
                    <h2>YOUR CART IS EMPTY!</h2>
                </div>
            </div>
        )
    }
}

export default CartEmpty ;