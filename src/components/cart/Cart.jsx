import React from 'react'

import CartApproved from './CartApproved';
import CartHeader from './CartHeader'

const Cart = () => {

    return (
        <div >
            <CartHeader />
            <CartApproved />
            {/* <CartDiscarded /> */}
            {/* <Children /> */}
        </div>
    )
}

export default Cart
