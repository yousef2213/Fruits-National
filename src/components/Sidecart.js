import React from 'react'
import {ProductConsumer} from '../context/context'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

export default function Sidecart() {
    return (
        <ProductConsumer>
            {value => {
                const {CartOpen,Cart,cartTotal,closeCart} = value;
                
                return(
                    <CartWrapper show={CartOpen} onClick={closeCart}>
                        <ul>
                            {Cart.map(item=>{
                                return(
                                    <li className="cart-item mb-4 pt-2" key={item.id}>
                                        <img width="35" 
                                        src={item.image}
                                        alt="cart item" 
                                        />
                                        <div>
                                            <h5 className="text-capitalize">{item.name}</h5>
                                            <h5 className="text-capitalize">amout : {item.count}</h5>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                        <h5 className="text-main text-capitalize">cart total : $ {cartTotal}</h5>
                        <Link to="/Cart" className="main-link my-5">
                            cart page
                        </Link>
                    </CartWrapper>
                )
            }}
        </ProductConsumer>
    )
}

const CartWrapper = styled.nav`
position: fixed;
width: 100%;
right:0;
height: 100%;
z-index: 1;
padding-left:2rem;
top: 61px;
background: var(--mainGrey);
border-left: 3px solid #731b1d;
transition: var(--mainTransition);
transform: ${props => (props.show ?  "translateX(0)" : "translateX(100%)")};
ul {
    list-style: none;
    padding: 0 !important;s
}
.sidebar-item{
    display: block;
    font-size: 1.2rem;
    text-transform: capitalize;
    color: var(--mainBlack);
    padding: 0.5rem 1.5rem;
    background: transparent;
    transition: var(--mainTransition);
}
.sidebar-item:hover {
    background: var(--primaryColor);
    color: var(--mainWhite);
    padding: 0.5rem 1.5rem 0.5rem 2.5rem;
    text-decoration: none;
}
@media (min-width: 576px) {
    width: 20rem;
}
overflow:scroll
`