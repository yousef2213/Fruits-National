import React from 'react'
import {ProductConsumer} from '../../context/context'
import Product from '../Product'
import Title from '../Title'
import { Link } from 'react-router-dom'
export default function Featured() {
    return (
        <section className="py-5">
            <div className="container">
                <Title title="featured" title_2="fruits" center="true" />
                <div className="row">
                    <ProductConsumer>
                        {value =>{
                            const {featuredProducts} = value;
                            return (
                                featuredProducts.map(product =>{
                                    return(
                                        <Product key={product.id} product={product} />
                                    )
                                } )
                            )
                        }}
                    </ProductConsumer>
                    <div className="col-10 mx-auto text-center">
                        <Link to="/Fruits" className="featured-link">
                            our products
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
