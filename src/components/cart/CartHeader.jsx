import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const CartHeader = ({ items }) => {
    return (
        <div className="flex items-center justify-between">
            <h1>Your cart</h1>
            <Link to="/cartNext">
                <button disabled={items} className="text-lg">Next Step</button>
            </Link>
        </div>
    )
}

export default CartHeader
