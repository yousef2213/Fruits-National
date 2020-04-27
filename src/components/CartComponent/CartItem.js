import React from 'react'
import {
    FaTrash,
    FaChevronCircleUp,
    FaChevronCircleDown
} from 'react-icons/fa'

export default function CartItem({cartitem,Increment,decrement,removeItem}) {
    const {count,name,image,price,total,id} = cartitem;
    return (
        <div className="row text-center align-items-center my-5">

            <div className="col-10 mx-auto col-lg-2 my-0 my-lg-0">
                <img src={image} alt="product cart" className="img-fluid" width="60" />
            </div>

            <div className="col-10 mx-auto col-lg-2 my-3 my-lg-0">
                <span className="d-lg-none"> Product : </span> {name}
            </div>

            <div className="col-10 mx-auto col-lg-2 my-0 my-lg-0 text-danger">
                <span className="d-lg-none"> Price : </span> $ {price}
            </div>

            <div className="col-10 mx-auto col-lg-2">
                <div className="d-flex justify-content-center align-items-center">
                    <FaChevronCircleDown className="text-main cartitem" onClick={() => decrement(id)} />
                    <span className="mx-3 text-title">{count}</span>
                    <FaChevronCircleUp className="text-main cartitem" onClick={() => Increment(id)} />
                </div>
            </div>

            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <FaTrash className="cartitem text-danger" onClick={() => removeItem(id)}  />
            </div>

            <div className="col-10 mx-auto col-lg-2 my-3 my-lg-0 text-main">
                Item Total :  $ {total}
            </div>
        </div>
    )
}
