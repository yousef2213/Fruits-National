import React from 'react'
import {ProductConsumer} from '../../context/context'
import CartItem from './CartItem';

export default function cartList() {
    return (
        <div className="conatiner-fluid">
            <div className="row">
                <div className="col">
                <ProductConsumer>
                    {value =>{
                        const {Cart,removeItem,Increment,decrement} = value;
                        
                        if(Cart.length === 0 ){
                            return(
                                <h1 className="text-center text-title my-5">
                                    your cart is currently empty
                                </h1>
                            );
                        }
                        return(
                            <>
                                {Cart.map( item =>{
                                    return(
                                        <CartItem
                                        key={item.id}
                                        cartitem={item}
                                        Increment={Increment}
                                        decrement={decrement}
                                        removeItem={removeItem}
                                        />
                                    )
                                } )}
                            </>
                        )
                    }}
                </ProductConsumer>
                </div>
            </div>
        </div>
    )
}
