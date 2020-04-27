import React, { Component } from 'react'
import {FaAccessibleIcon,FaOpencart,FaStripeS} from 'react-icons/fa'
import styled from 'styled-components'

export default class Services extends Component {
    state = {
        service : [
            {
                id:1,
                icon:<FaAccessibleIcon />,
                title:"Free Shopping",
                info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, perferendis.'
            },
            {
                id:2,
                icon:<FaOpencart />,
                title:"Free Shopping",
                info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, perferendis.'
            },
            {
                id:3,
                icon:<FaStripeS />,
                title:"Free Shopping",
                info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, perferendis.'
            }
        ]
    }
    render() {
        return (
            <ServiceWrapper>
            <div className="container">
                <div className="row py-5">
                    {this.state.service.map( item =>{
                        return(
                            <div className="col-10 mx-auto col-md-4 text-center" key={item.id}>
                                <div className="service-icon">{item.icon}</div>
                                <h6 className="pt-3">{item.title}</h6>
                                <p>{item.info}</p>
                            </div>
                        )
                    } )}
                </div>
            </div>
            </ServiceWrapper>
        )
    }
}

const ServiceWrapper =styled.section`
    background: #f7f7f7;
    .service-icon {
        font-size: 2.5rem !important ;
        color:#761c1e;
    }
    p {
        color: var(--darkGrey);
    }
`