import React from 'react'
import defaultBcg from '../images/defaultBcg.jpeg'
import Hero from '../components/Hero'
import {Link} from 'react-router-dom'
export default function Default() {
    return (
        <>
            <Hero title="404" img={defaultBcg} max="true">
                <h2 className="text-uppercase pb-4">page not found</h2>
                <Link to="/" className="main-link">
                    bact to home
                </Link>
            </Hero>
        </>
    )
}