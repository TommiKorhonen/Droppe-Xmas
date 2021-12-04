import React from 'react'

const CartCombined = ({ items }) => {
    return (
        <div>
            {items && <h2 style={{ textAlign: "center" }}>No items added yet </h2>}
        </div>
    )
}

export default CartCombined
