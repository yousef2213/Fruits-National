import React from 'react'
import Hero from '../components/Hero'
import CartComponent from '../components/CartComponent/CartComponent'
import storeBcg from '../images/storeBcg.jpeg'

export default function Card(props) {
    
    return (
        <>
            <Hero img={storeBcg} />
            <CartComponent history={props.history}/>
        </>
    )
}
