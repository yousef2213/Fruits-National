import React from 'react' //////////// Page
import productsBcg from '../images/productsBcg.jpeg'
import Hero from '../components/Hero'
import Title from '../components/Title'
import {ProductConsumer} from '../context/context'
import {Link} from 'react-router-dom'



import AllProducts from '../components/productsCompnent/allproducts'

export default function Products() {
    return (
        <>
            <Hero img={productsBcg} title="our fruits">
                <Link to="/" className="main-link" >Back home</Link>
            </Hero>
            <section className="py-5">
            <div className="container">
                <Title title="our" title_2="fruits" center="true" />
                <div className="row">
                    <ProductConsumer>
                        {value =>{
                            const {filteredProducts} = value;
                            
                            return (
                                filteredProducts.map(product =>{
                                    return(
                                        <AllProducts key={product.id} product={product} />
                                    )
                                } )
                            )
                        }}
                    </ProductConsumer>
                </div>
            </div>
        </section>
        </>
    )
}