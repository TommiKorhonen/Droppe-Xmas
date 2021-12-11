import React from 'react'
import { Link } from 'react-router-dom';

interface ICartHeaderProps {
    items: boolean;
}

const CartHeader: React.FC<ICartHeaderProps> = ({ items }) => {
    return (
        <div className="flex items-center justify-between">
            <h1>Your cart</h1>
            <Link to="/cartNext">
                <button disabled={items} style={{ marginTop: 16 }} className="text-lg">Next Step</button>
            </Link>
        </div>
    )
}

export default CartHeader
