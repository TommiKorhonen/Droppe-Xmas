import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Declined from '../dashboard/wishlists/approved&Declined/Declined';
import Children from '../sandbox/Children';

const CartDiscarded = () => {
    const [isDiscarded, setIsDiscarded] = useState(false)
    const allDiscarded = useSelector(
        (state) => state.children.ChildrenDiscardedItems
    );
    return (
        <div>
            {/* <h2>Discarded items</h2> */}
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
