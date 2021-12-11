import React from 'react'

interface ICartCombinedProps {
    items: boolean;
}

const CartCombined: React.FC<ICartCombinedProps> = ({ items }) => {
    return (
        <div>
            {items && <h2 style={{ textAlign: "center" }}>No items added yet </h2>}
        </div>
    )
}

export default CartCombined
