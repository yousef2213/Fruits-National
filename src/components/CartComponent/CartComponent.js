import React from 'react'
import Title from '../Title'
import CartColums from './CartColums'
import CartTotal from './CartTotal'
import CartList from './cartList'

export default function Item({history}) {
    
    return (
        <>
        <div className="container my-5">
            <Title title="your cart" title_2="items" center="true" />
        </div>
        <CartColums />
        <CartList />
        <CartTotal history={history} />
        </>
    )
}
