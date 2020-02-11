import React, { Component } from 'react';

import { storeProducts } from '../data';
import { ProductConsumer } from '../data.context';
import Product from './Product.component';

class Productlist extends Component {
    constructor(props){
        super(props);

        this.state = {
            products: storeProducts
        }
    }
    render(){
        // console.log(this.state.products);
        
        return(
            <React.Fragment>
                <div className="container mt-5 pt-5">
                    <div className="row justify-content-center">
                        <ProductConsumer>
                            {(value) => {
                                return value.products.map(product => {
                                    return <Product key={ product.id } product={ product }/>
                                })
                            }}
                        </ProductConsumer>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Productlist;