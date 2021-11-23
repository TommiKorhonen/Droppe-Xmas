import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

import { setChildrenItemApproved, setChildrenItemDiscarded } from '../../../redux/reducers/childrenSlice';
import Approved from './approved&Declined/Approved';
import Declined from './approved&Declined/Declined';
import Products from './products/Products';
import Users from './Users';

const WishlistItem = ({ products, userId }) => {
    const [acceptedProducts, setAcceptedProducts] = useState([])
    const [discardedProducts, setDiscardedProducts] = useState([])
    const dispatch = useDispatch();
    const addProduct = (product, id) => {
        const copiedState = [...acceptedProducts, product];
        setAcceptedProducts(copiedState);
        dispatch(setChildrenItemApproved({
            userId,
            products: [product],
        }))
    };
    const declineProduct = (product) => {
        const copiedState = [...discardedProducts, product];
        setDiscardedProducts(copiedState);
        dispatch(setChildrenItemDiscarded({
            userId,
            products: [product]
        }))

    };
    // const handleRemove = (id) => {
    //     return Products.filter((item) => item.id !== id);
    // }
    return (
        <>
            <article className="card" id="container">
                <div>
                    <Users userId={userId} />
                    {products.map((data) => {
                        return (
                            <div className="productContainer flex  justify-between" >
                                <Products key={data.productId} productId={data.productId} />
                                <div className="flex items-center justify-end cardBtns">
                                    <button type="submit" onClick={() => addProduct(data, userId)} className="buttonAccept">Accept</button>
                                    <button type="submit" onClick={() => declineProduct(data)} className="buttonDelete">Delete</button>
                                </div>
                            </div>

                        )
                    })}
                </div>
                <div className="flex flex-col items-center justify-center approvedContainer">
                    <Approved acceptedProducts={acceptedProducts} />
                    <Declined declinedProducts={discardedProducts} />
                </div>
            </article>
        </>
    )
}

export default WishlistItem
