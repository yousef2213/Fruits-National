import React from 'react'
import styled from 'styled-components'


export default function Footer() {
    return (
        <FooterWrapper>
            <div className="container">
                <div className="col-10 mx-auto py-1">
                    <h6 className="py-2 text-capitalize">
                        copyright &copy; Fruits store {new Date().getFullYear()}. all rights reserved{" "}
                    </h6>
                </div>
            </div>
        </FooterWrapper>
    )
}


const FooterWrapper = styled.div`
    background: var(--darkGrey);
    color: var(--mainWhite);
    h6{
        margin:0
    }
` 