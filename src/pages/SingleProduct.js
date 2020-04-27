import React from 'react'
import Hero from '../components/Hero'
import singleProductBcg from '../images/singleProductBcg.jpeg'
import {ProductConsumer} from '../context/context'
import {Link} from 'react-router-dom'
import { FaCartPlus } from 'react-icons/fa'

export default function SingleProduct() {
    return (
        <>
            
            <ProductConsumer>
                {value=>{
                    const {singleProducts,addToCart} = value;
                    const {
                        description,
                        image,
                        price,
                        name, 
                        id
                    } = singleProducts;
                    
                    return(
                        <>
                        <Hero img={singleProductBcg} />
                            <div className="container">
                                <div className="row">
                                    <div className="col-10 mx-auto col-md-6 col-sm-8 my-3">
                                        <img src={image} alt="single product" className="img-fluid" />
                                    </div>
                                    <div className="col-10 mx-auto col-md-6 col-sm-8 py-5">
                                        <h5 className="text-title mb-4">
                                            name : {name}
                                        </h5>
                                        <h5 className="text-main text-capitalize mb-4">
                                            price : <span style={{fontSize:"17px"}}><del>$30.00</del> </span>  $ {price}
                                        </h5>
                                        <p className="text-title mt-3">
                                            some info about {name} :
                                        </p>
                                        <p>
                                            {description}
                                        </p>
                                        <Link to="/Fruits" className="main-link my-4 mr-4">
                                        bact to products
                                        </Link>
                                        <button
                                        type="button"
                                        onClick={()=> addToCart(id)}
                                        className="main-link"
                                        > <FaCartPlus /> add to cart</button>
                                    </div>
                                </div>
                            </div>
                            </>
                    )
                    
                }}
            </ProductConsumer>
        </>
    )
}
