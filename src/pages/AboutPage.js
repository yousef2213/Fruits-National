import React from 'react'
import AboutBcg from '../images/aboutBcg.jpeg'
import Hero from '../components/Hero'
import Info from '../components/AboutComponent/Info'
export default function About() {
    return (
        <>
            <Hero img={AboutBcg} />
            <Info />
        </>
    )
}
