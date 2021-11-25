import React from 'react'

import CartApproved from './CartApproved';
import CartDiscarded from './CartDiscarded';
import CartHeader from './CartHeader'
const Cart = () => {

    return (
        <div >
            <CartHeader />
            <CartApproved />
            <CartDiscarded />
        </div>
    )
}

export default Cart
