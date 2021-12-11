import React from 'react'
import { useAppSelector } from '../../redux/hooks/hooks';
import Approved from '../dashboard/wishlists/approved&Declined/Approved'
import Children from '../sandbox/Children';

const CartApproved = () => {
    const allApproved = useAppSelector(
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
