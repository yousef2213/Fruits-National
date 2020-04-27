import React from 'react'
import Hero from '../components/Hero'
import {Link} from 'react-router-dom'
import mainBcg from '../images/mainBcg.jpeg'
import Services from '../components/HomeComponent/Services'
import Featured from '../components/HomeComponent/Featured'


export default function Home() {
    return (
        <>
            <Hero title="Fruits National" max="true" img={mainBcg}>
                <Link to="/Fruits" className="main-link">
                    our products
                </Link>
            </Hero>

            <Services />
            <Featured />
        </>
    )
}

