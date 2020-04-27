import React from 'react'
import {Link} from 'react-router-dom'
import {ProductConsumer} from '../context/context'
import styled from 'styled-components'

export default function Sidebar() {
    return (
        <ProductConsumer>
            {value =>{
                const {handelSidebar,SidebarOpen,links} = value;
                return(
                    <NavWrapper show={SidebarOpen}>
                        <ul>
                            {links.map( link =>{
                                return(
                                    <li key={link.id} className="sidebar-item" onClick={handelSidebar}>
                                        <Link to={link.path} className="nav-link">
                                            {link.text}
                                        </Link>
                                    </li>
                                )
                            } )}
                        </ul>
                    </NavWrapper>
                )
            }}
        </ProductConsumer>
    )
}

const NavWrapper = styled.nav`
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 1;
    top: 61px;
    background: var(--mainGrey);
    border-right: 3px solid #731b1d ;
    transition: var(--mainTransition);
    transform: ${props => (props.show ? "translateX(0)" : "translateX(-100%)")};
    ul {
        list-style: none;
        padding: 0 !important;s
    }
    .sidebar-item{
        display: block;
        font-size: 1.2rem;
        text-transform: capitalize;
        color: #000 ;
        padding: 0.5rem 1.5rem;
        background: transparent;
        transition: var(--mainTransition);
    }
    .sidebar-item:hover {
        background: var(--primaryRGBA );
        color: var(--mainWhite);
        padding: 0.5rem 1.5rem 0.5rem 2.5rem;
        text-decoration: none;
    }
    .nav-link{
        color: #000 ;
    }
    @media (min-width: 576px) {
        width: 20rem;
    }
    
`
