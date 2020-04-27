import React from 'react'

export default function CartColums() {
    return (
        <div className="container-fluid d-none d-lg-block text-center my-5">
            <div className="row">
            <div className="col-lg-2">
                <h5 className="text-uppercase">products</h5>
            </div>
            {/* name products */}
            <div className="col-lg-2">
                <h5 className="text-uppercase">name products</h5>
            </div>
            {/* price */}
            <div className="col-lg-2">
                <h5 className="text-uppercase">price</h5>
            </div>
            {/* quantity */}
            <div className="col-lg-2">
                <h5 className="text-uppercase">quantity</h5>
            </div>
            {/* remover */}
            <div className="col-lg-2">
                <h5 className="text-uppercase">remover</h5>
            </div>
            {/* total */}
            <div className="col-lg-2">
                <h5 className="text-uppercase">total</h5>
            </div>
            </div>
        </div>
    )
}
