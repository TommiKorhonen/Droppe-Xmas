import React from 'react'
import { useSelector } from 'react-redux'
import Declined from '../dashboard/wishlists/approved&Declined/Declined';
import Children from '../sandbox/Children';

const CartDiscarded = () => {
    const allDiscarded = useSelector(
        (state) => state.children.ChildrenDiscardedItems
    );
    return (
        <div>
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
