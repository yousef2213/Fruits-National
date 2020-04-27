import React from 'react'
import {Link} from 'react-router-dom'
import {ProductConsumer} from '../context/context'
import {FaSearch,FaCartPlus} from 'react-icons/fa'
import styled from 'styled-components'
export default function Product({product}) {
    return (
        <ProductConsumer>
            {value =>{
                const {addToCart,setSingleProduct} = value;
                
                return(
                    <ProductWrapper className="col-10 mx-auto col-sm-8 col-md-6 col-lg-4">
                        <div className="card my-5">
                            <div className="img-container">
                                <img 
                                src={product.image} 
                                alt="product phone" 
                                className="card-img-top p-5"
                                style={{
                                    height:"280px"
                                }}
                                />
                                <div className="product-icon">
                                    <Link to={`/Fruits/${product.id}`} onClick={ ()=> setSingleProduct(product.id) }>
                                        <FaSearch className="icon" />
                                    </Link>
                                    <FaCartPlus className="icon" onClick={()=> addToCart(product.id)} />
                                </div>
                            </div>
                            <div className="card-body d-flex justify-content-between">
                                <p className="mb-0">{product.name}</p>
                                <h6 className="mb-0 text-main">$ {product.price}</h6>
                            </div>
                        </div>
                    </ProductWrapper>
                )
            }}
        </ProductConsumer>
    )
}

const ProductWrapper =styled.div`
    .card{
        box-shadow: 5px 10px 5px 0px rgba(0,0,0,0.5);
        transition : var(--mainTransition);
        overflow:hidden
    }
    .card:hover{
        box-shadow: 5px 10px 5px 0px rgba(0,0,0,0.75);
    }
    .img-container{
        position: relative;
    }
    .card-img-top{
        transition : var(--mainTransition);
        cursor: pointer;
    }
    .card:hover .card-img-top{
        transform: scale(1.14);
        opacity:0.8
    }
    .card-img-top{
        height:100%
    }
    .product-icon{
        position: absolute;
        top:50%;
        left:50%;
        transform: translate(-50%,-50%);
        opacity:0;
        transition : var(--mainTransition);
    }
    .icon{
        font-size: 2.5rem;
        background: var(--primaryRGBA);
        margin: 1rem;
        color:var(--primaryColor);
        border-radius: 0.5rem;
        padding: 0.5rem;
        cursor: pointer;
    }
    .card:hover .product-icon{
        opacity:1
    }
    

`
