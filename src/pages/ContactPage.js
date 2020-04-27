import React from 'react'
import contactBcg from '../images/contactBcg.jpeg'
import Hero from '../components/Hero'
import Contact from '../components/ContactComponent/Contact'
export default function ContactPage() {
    return (
        <>
            <Hero img={contactBcg} />
            <Contact />
        </>
    )
}