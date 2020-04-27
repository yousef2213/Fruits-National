import React from 'react'
import {ProductConsumer} from '../../context/context'
import PayPalBtn from './PayPalBtn'

export default function CartTotal({history}) {
    
    return (
        <ProductConsumer>
            {value => {
                const {carSubTotal,cartTxt,cartTotal,clearCart} = value;
                
                return(
                    <div className="container">
                        <div className="row">
                        <div className="col text-center mx-auto">
                            <button type="button" className="btn btn-outline-danger text-capitalize" onClick={clearCart}>
                                clear cart
                            </button>
                            <h3 className="my-4 text-capitalize">subtotal : $ {carSubTotal}</h3>
                            <h3 className="my-4 text-capitalize">tax : $ {cartTxt}</h3>
                            <h3 className="my-4 text-capitalize">total : $ {cartTotal}</h3>
                            <PayPalBtn 
                            history={history}
                            cartTotal={cartTotal}
                            clearCart={clearCart}
                            />
                        </div>
                        </div>
                    </div>
                )
            }}
        </ProductConsumer>
    )
}
