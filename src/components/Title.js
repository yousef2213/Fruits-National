import React from 'react'
import styled from 'styled-components'

export default function Title({title,center,title_2}) {
    return (
        <TitleWrapper className="row" center={center}>
            <div className="col">
                <h2 className="text-capitalize">{title} <span className="text-capitalize" style={{color:"#761c1e"}}>{title_2}</span></h2>
                <div className="text-underline"></div>

            </div>
        </TitleWrapper>
    )
}

const TitleWrapper = styled.div`
    text-align: ${props => props.center ? "center" : "left"};
    .text-underline{
        height: .25rem;
        width: 7rem;
        background: #761c1e;
        margin: ${props => props.center ? "0 auto" :"0"};
    }
`