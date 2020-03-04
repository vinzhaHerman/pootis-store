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
            modalProduct: detailProduct,
            cartSubTotal: 0,
            cartTax: 0,
            cartTotal: 0
        }
    }

    componentDidMount(){
        this.setProducts();
    }

    setProducts = () => {
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
        const oneProduct = this.state.products.find(product => product.id === id);
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
        },
        () => {
            this.countTotal();
            console.log(this.state);
        }
        )
    }

    findItemInCart = id => {
        let currentCartState = [...this.state.cart];
        const selectedProducts = currentCartState.find(product => product.id === id);

        const exactProductIndex = currentCartState.indexOf(selectedProducts);
        const foundedProduct = currentCartState[exactProductIndex];

        return {foundedProduct, currentCartState};
    }

    increment = id => {
        let {foundedProduct, currentCartState} = this.findItemInCart(id);

        foundedProduct.count = foundedProduct.count + 1;
        foundedProduct.total = foundedProduct.count * foundedProduct.price;

        this.setState({
            cart: [...currentCartState]
        },
        () => {
            this.countTotal()
        }
        )
    }
    
    decrement = id => {
        let {foundedProduct, currentCartState} = this.findItemInCart(id);

        foundedProduct.count = foundedProduct.count - 1;

        if(foundedProduct.count === 0){
            this.removeItem(id);
        }
        else{
            foundedProduct.total = foundedProduct.count * foundedProduct.price;
            this.setState({
                cart: [...currentCartState]
            },
            () => {
                this.countTotal()
            }
            )
        }
    }
    removeItem = id => {
        // console.log("removeItem!");
        let currentProducts = [...this.state.products];
        let currentCartState = [...this.state.cart];

        let newCartState = currentCartState.filter(product => product.id !== id);

        const exactProductIndex = currentProducts.indexOf(this.getItem(id));
        let removedProduct = currentProducts[exactProductIndex];
        removedProduct.inCart = false;
        removedProduct.count = 0;
        removedProduct.total = 0;

        this.setState({
            cart: [...newCartState],
            products: [...currentProducts]
        },
        () => {
            this.countTotal();
        }
        )
    }

    countTotal = () => {
        let subtotal = 0;
        this.state.cart.map(item => subtotal+=item.total);
        const tax = parseFloat((subtotal*0.1).toFixed(2));
        const total = subtotal + tax;
        this.setState({
            cartSubTotal: subtotal,
            cartTax: tax,
            cartTotal: total
        })
    }

    clearCart = () => {
        this.setState({
            cart: [],
            cartSubTotal: 0,
            cartTax: 0,
            cartTotal: 0
        },
        () => {
            this.setProducts();
        }
        )
    }

    openModal = id => {
        const theProduct = this.getItem(id);
        this.setState({
            modalProduct: theProduct, modalOpen: true
        })
    }

    closeModal = () => {
        this.setState({
            modalOpen: false
        })
    }

    findItemInCart(id) {
        let currentCartState = [...this.state.cart];
        const selectedProducts = currentCartState.find(product => product.id === id);
        const exactProductIndex = currentCartState.indexOf(selectedProducts);
        const tobeIncrementedProduct = currentCartState[exactProductIndex];
        return { tobeIncrementedProduct, currentCartState };
    }

    render(){
        return(
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail:   this.handleDetail,
                addToCart:      this.addToCart,
                openModal:      this.openModal,
                closeModal:     this.closeModal,
                increment:      this.increment,
                decrement:      this.decrement,
                removeItem:     this.removeItem,
                clearCart:      this.clearCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };