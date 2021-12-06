import React from 'react'
import { useSelector } from 'react-redux'
import Declined from '../dashboard/wishlists/approved&Declined/Declined';
import Children from '../sandbox/Children';

const CartDiscarded = ({ items }) => {
    const allDiscarded = useSelector(
        (state) => state.children.ChildrenDiscardedItems
    );
    return (
        <div style={{ marginTop: 36 }}>
            {items ? "" : <h2 style={{ color: "red" }}>Discarded items</h2>}
            {allDiscarded.map((discarded) => {
                return (
                    <div className="declinedSpan">
                        <Children userId={discarded.userId} />
                        <Declined declinedProducts={discarded.products} />
                    </div>
                )
            })}
        </div>
    )
}

export default CartDiscarded
