import React from 'react'
import { useSelector } from 'react-redux';
import Approved from '../dashboard/wishlists/approved&Declined/Approved'
import Products from '../dashboard/wishlists/products/Products';

const ConfirmedScreen = () => {
    const totalValue = useSelector(
        (state) => state.products.fullPrice
    );

    const sumPriceWithoutDiscount = useSelector(
        (state) => state.products.fullPriceNoDiscount
    );

    const allApproved = useSelector(
        (state) => state.children.ChildrenApprovedItems
    );
    const cart = useSelector(
        (state) => state.children.cart
    );
    return (
        <div>
            <h2>Total Price: {totalValue} €</h2>
            {cart.map((items) => {
                return (
                    <div className="grid grid-cols-2 confirmedBox" style={{ marginTop: 20 }}>
                        <div className="flex items-center justify-center" >
                            <Products productId={items.productId} />
                        </div>
                        <div className="flex items-center justify-center confirmedBorder">
                            <p>Quantity: {items.quantity}</p>
                        </div>
                    </div>
                )
            })}
            <span>{sumPriceWithoutDiscount}</span>
        </div>
    )
}

export default ConfirmedScreen
