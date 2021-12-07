import React from 'react'
import { useSelector } from 'react-redux'
import Approved from '../dashboard/wishlists/approved&Declined/Approved'
import Children from '../sandbox/Children';

const CartApproved = () => {
    const allApproved = useSelector(
        (state) => state.children.ChildrenApprovedItems
    );
    return (
        <div>
            {allApproved.map((approved, index) => {
                console.log(approved)
                return (
                    <div key={index} className="testi" style={{ paddingBottom: 16 }}>
                        <Children userId={approved.userId} />
                        <Approved acceptedProducts={approved.products} />
                    </div>
                )
            })}
        </div>
    )
}

export default CartApproved
