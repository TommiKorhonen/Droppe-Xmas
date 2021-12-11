import React from 'react'
import { useAppSelector } from '../../redux/hooks/hooks';
import Declined from '../dashboard/wishlists/approved&Declined/Declined';
import Children from '../sandbox/Children';

interface ICartDiscardedProps {
    items: boolean;
}

const CartDiscarded: React.FC<ICartDiscardedProps> = ({ items }) => {
    const allDiscarded = useAppSelector(
        (state) => state.children.ChildrenDiscardedItems
    );
    return (
        <div style={{ marginTop: 36 }}>
            {items ? "" : <h2 style={{ color: "red" }}>Discarded items</h2>}
            {allDiscarded.map((discarded) => {
                return (
                    <div key={discarded.userId} className="declinedSpan">
                        <Children userId={discarded.userId} />
                        <Declined declinedProducts={discarded.products} />
                    </div>
                )
            })}
        </div>
    )
}

export default CartDiscarded
