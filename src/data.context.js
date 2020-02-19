import React, { Component } from 'react';
import { storeProducts, detailProduct } from './data';

const ProductContext = React.createContext();
//Provider
//Consumer

class ProductProvider extends Component {
    constructor(props){
        super(props);

        this.state = {
            products: [],
            detailProduct: detailProduct,
            cart: [],
            modalOpen: false,
            modalProduct: detailProduct
        }
    }

    componentDidMount(){
        let tobeProducts = [];
        storeProducts.forEach(item => {
            const singleItem = {...item};
            tobeProducts = [...tobeProducts, singleItem];
        });
        this.setState(() => {
            return { products: tobeProducts }
        });
    }

    getItem = id => {
        const oneProduct = this.state.products.find(item => item.id === id);
        return oneProduct;
    }

    handleDetail = id => {
        const aqquiredProduct = this.getItem(id);
        this.setState(()=>{
            return { detailProduct: aqquiredProduct }
        })
    }
    addToCart = id => {
        let tobeaddedproduct = [...this.state.products];
        const productIndex = tobeaddedproduct.indexOf(this.getItem(id));
        const theProduct = tobeaddedproduct[productIndex];
        theProduct.inCart = true;
        theProduct.count = 1;
        const price = theProduct.price;
        theProduct.total = price;
        this.setState(()=>{
            return { products: tobeaddedproduct, cart: [...this.state.cart, theProduct] }
        }, () => {console.log(this.state);
        })
    }

    openModal = id => {
        const theProduct = this.getItem(id);
        this.setState({
            modalProduct: theProduct, modalOpen: true
        }, ()=>{
            setTimeout(this.closeModal,3000)
        })
    }

    closeModal = () => {
        this.setState({
            modalOpen: false
        })
    }

    render(){
        return(
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
                openModal: this.openModal,
                closeModal: this.closeModal
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };