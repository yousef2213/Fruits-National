import React from 'react'
import {ProductConsumer} from '../context/context'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

export default function SideTop() {
    return (
        <ProductConsumer>
            {value => {
                const {CartOpen,Cart,cartTotal,closeCart} = value;

                if(Cart.length === 0) {
                    return(
                        <CartWrapper show={CartOpen} onClick={closeCart}>
                        <div className="row">
                                    <div className="cart-item col-10 mx-auto text-center">
                                    <h6 className="text-center text-title my-5">
                                    no more items
                                    </h6>
                                    </div>
                        </div>
                        
                    </CartWrapper>
                    )
                }
                return(
                    <CartWrapper show={CartOpen} onClick={closeCart}>
                        <div className="row">
                            {Cart.map(item=>{
                                return(
                                    <div className="cart-item col-2 mr-md-1 mr-sm-5 text-center align-items-center" key={item.id}>
                                        <img width="35" 
                                        src={item.image}
                                        alt="cart item" 
                                        style={{paddingTop:"20px"}}
                                        />
                                        <div>
                                            <h6 className="text-capitalize text-center text-main">$ {item.price}</h6>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </CartWrapper>
                    
                )
            }}
        </ProductConsumer>
    )
}

const CartWrapper = styled.div`
position: fixed;
width: 50%;
left:25%;
height: 100px;
padding-left:1rem;
z-index:1;
top : -30px;
background: var(--mainGrey);
transition: var(--mainTransition);
cursor: pointer;

@media (min-width: 900px) {
    width: 40rem;
}
overflow-x :scroll;

&:hover{
    top: 65px;
    .cart-item{
        margin-right: 60px
    }
}
`