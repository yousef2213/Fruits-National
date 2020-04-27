import React, { Component } from 'react'
import { Links } from './Links'
import {items} from './productData'

const ProductContext = React.createContext();   

class ProductProvider extends Component {

    state = {
        SidebarOpen : false,
        CartOpen : false,
        links : Links,
        Cart : [],
        CartItems :0,// this start items products
        cartTxt:0,
        carSubTotal:0,
        cartTotal:0,
        featuredProducts : [],
        storeProducts : [],
        filteredProducts : [],
        singleProducts : {},
        loading: true
        
    }

    componentDidMount() {
        this.setProducts(items);
    }
    // setProducts
    setProducts = (products) =>{
        let storeProducts = products.map( item =>{
            const {id} = item;
            const image = item.photoUrl;
            const product = {id,...item,image}
            return product;
        })
        let featuredProducts = storeProducts.filter( item => item.featured === true )
        
        this.setState({
            storeProducts,
            featuredProducts,
            filteredProducts: storeProducts,
            Cart: this.getStorageCart(),
            singleProducts : this.getStorageProducts(),
            loading: true
        },()=>{
            this.addTotals()
        })
    }
    //getStorageCart
    getStorageCart = () =>{
        let cart;
        if(localStorage.getItem("cart")){
            cart = JSON.parse(localStorage.getItem("cart"))
        }else{
            cart = [];
        }
        return cart;
    }
    //getStorageProducts
    getStorageProducts = ()=>{
        return localStorage.getItem('singleproduct') ? JSON.parse(localStorage.getItem('singleproduct')) : {}
    }

    // get totals
    getTotals = () => {}
    
    //add totals
    addTotals = () => {
        // const allTotal = this.getTotals();
        // this.setState({
        //     CartItems : allTotal.cartItem,
        //     carSubTotal: allTotal.subTotal,
        //     cartTxt: allTotal.tax,
        //     cartTotal:allTotal.total
        // })

        let subTotal = 0;
        let cartItem = 0;
        this.state.Cart.forEach( item => {
            subTotal += item.total;
            cartItem += item.count;
        })
        subTotal = parseFloat(subTotal.toFixed(2));
        let tax = subTotal * 0.1;
        tax = parseFloat(tax.toFixed(2));
        let allTotal = tax + subTotal;
        allTotal = parseFloat(allTotal.toFixed(2));
        this.setState({
            cartTotal : allTotal,
            carSubTotal: subTotal,
            cartTxt: tax,
            CartItems: cartItem
        })
    };

    // sync storage
    syncStorage = () => {
        localStorage.setItem("cart", JSON.stringify(this.state.Cart))
    };


    //add To Cart
    addToCart =(id)=>{
        let tempCart = [...this.state.Cart];
        let tempProducts = [...this.state.storeProducts];
        let tempItem = tempCart.find(item => item.id === id);
        if(!tempItem){
            tempItem = tempProducts.find(item => item.id === id);
            let total = tempItem.price;
            let cartItem = {...tempItem,count:1,total};
            tempCart = [...tempCart,cartItem]
        }else{
            tempItem.count++;
            tempItem.total = tempItem.price * tempItem.count
            tempItem.total = parseFloat(tempItem.total.toFixed(2))
        }
        this.setState(()=>{
            return {Cart: tempCart}
        },()=>{
            this.openCart()
            this.addTotals()
            this.syncStorage()
        } )
        
        
        
}
        

    // set single product
    setSingleProduct = (id) =>{
        let product = this.state.storeProducts.find(item => item.id === id)
        localStorage.setItem('singleproduct', JSON.stringify(product))
        this.setState({
            singleProducts: {...product},
            loading: false
        })
        
    }



    // handel Sidebar
    handelSidebar = () => {
        this.setState({SidebarOpen: !this.state.SidebarOpen})
    }
    // handel Cart
    handelCart = () => {
        this.setState({CartOpen: !this.state.CartOpen})
    }

    // close 
    closeCart = () =>{
        this.setState({CartOpen:false})
    }

    // open 
    openCart = () =>{
        this.setState({CartOpen:true})
    }

    clearCart = () =>{
        this.setState(
            ()=>{
                return{
                    Cart :[]
                }
            }, ()=>{
                this.addTotals()
                this.syncStorage()
            }
        )
    }
    Increment = (id) =>{
        let tempCart = [...this.state.Cart];
        let tempItem = tempCart.find(item => item.id === id);
        tempItem.count++;
        tempItem.total = tempItem.count * tempItem.price;
        tempItem.total = parseFloat(tempItem.total.toFixed(2));
        this.setState( 
            ()=>{
            return{
                Cart : [...tempCart]
            }
        },
        () =>{
            this.addTotals()
            this.syncStorage()
        }
        )
        
    }
    decrement = (id) =>{
        let tempCart = [...this.state.Cart];
        let tempItem = tempCart.find(item => item.id === id);
        tempItem.count = tempItem.count - 1;

        if(tempItem.count === 0){
            this.removeItem(id)
        }else{
            tempItem.total = tempItem.count * tempItem.price;
            tempItem.total = parseFloat(tempItem.total.toFixed(2));
            this.setState( 
                ()=>{
                return{
                    Cart : [...tempCart]
                }
            },
            () =>{
                this.addTotals()
                this.syncStorage()
            }
            )
        }
        
    }
    removeItem = (id) =>{
        let tempCart = [...this.state.Cart];
        tempCart = tempCart.filter(item => item.id !== id)
        this.setState(
            ()=>{
                return{
                    Cart : [...tempCart]
                }
            },
            ()=>{
                this.addTotals()
            this.syncStorage()
            }
        )
    }

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handelCart : this.handelCart,
                handelSidebar : this.handelSidebar,
                openCart: this.openCart,
                closeCart: this.closeCart,
                setSingleProduct: this.setSingleProduct,
                addToCart : this.addToCart,
                clearCart : this.clearCart,
                Increment : this.Increment,
                decrement : this.decrement,
                removeItem : this.removeItem
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductConsumer,ProductProvider}
