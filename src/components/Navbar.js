import React from 'react'
import styled from 'styled-components'
import { FaBars , FaCartPlus } from 'react-icons/fa'
import { ProductConsumer } from '../context/context'
import logo from '../images/logo.png'

export default function Navbar() {
    return (
        <ProductConsumer>
            {value => {
                const { CartItems , handelSidebar , handelCart } = value;
                return(
                    <NavBarStyle>
                        <div className="nav-center">
                            <FaBars onClick={handelSidebar} className="icon-nav" />
                            <img src={logo} width="200" alt="" />
                            <div className="nav-cart">
                                <FaCartPlus onClick={handelCart} className="icon-nav" />
                                <div className="cart-item">
                                    {CartItems}
                                </div>
                            </div>
                        </div>
                    </NavBarStyle>
                )
            }}
        </ProductConsumer>
    )
}

const NavBarStyle = styled.nav`
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    width: 100%;
    padding: 0.25rem 1.5rem;
    background: #f7f7f7;
    border-bottom: 3px solid #731b1d;
    z-index:999;
    .nav-center {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1170px;
    margin: 0 auto;
    }
    .icon-nav {
    font-size: 1.5rem;
    cursor: pointer;
    }
    .nav-cart {
    position: relative;
    }
    .cart-item {
    background: var(--primaryColor);
    color: var(--mainWhite);
    font-size: 0.85rem;
    position: absolute;
    top: -8px;
    right: -8px;
    padding: 0 5px;
    border-radius: 50%;
}

`
