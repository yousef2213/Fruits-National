import React from 'react'
import AboutBcg from '../../images/aboutBcg.jpeg'
import Title from '../Title'

export default function Info() {
    return (
        <section className="pt-5">
            <div className="container mb-3">
            <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                    <img src={AboutBcg} style={{height:"320px"}} alt="about" className="img-fluid img-thumbnail"  />
                </div>
                <div className="col-10 mx-auto col-md-6 my-3">
                    <Title title="about us" />
                    <p className="text-muted text-lead my-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut voluptatibus voluptate quia cupiditate laudantium animi consectetur adipisicing elit. Ut voluptatibus voluptate! 
                    </p>
                    <p className="text-muted text-lead my-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut voluptatibus voluptate quia cupiditate laudantium animi! elit. Ut voluptatibus voluptate quia cupiditate laudantium animi!
                    </p>
                    <button 
                    className="main-link mt-4"
                    type="button"
                    >more info</button>
                </div>
            </div>
        </div>  
        </section>
        
    )
}