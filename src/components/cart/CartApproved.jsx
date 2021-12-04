import React from 'react'
import { useSelector } from 'react-redux'
import Approved from '../dashboard/wishlists/approved&Declined/Approved'
import Children from '../sandbox/Children';
import CartDiscarded from './CartDiscarded';
const CartApproved = () => {
    const allApproved = useSelector(
        (state) => state.children.ChildrenApprovedItems
    );
    return (
        <div>
            {allApproved.map((approved) => {
                console.log(approved)
                return (
                    <div>
                        <Children userId={approved.userId} />
                        <Approved acceptedProducts={approved.products} />
                    </div>
                )
            })}
        </div>
    )
}

export default CartApproved
