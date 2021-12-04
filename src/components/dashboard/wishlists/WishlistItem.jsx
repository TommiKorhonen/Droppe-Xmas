import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CartFinder from '../../../api/CartFinder';
import { setCartItems, setChildrenItemApproved, setChildrenItemDiscarded } from '../../../redux/reducers/childrenSlice';
import Approved from './approved&Declined/Approved';
import Declined from './approved&Declined/Declined';
import Products from './products/Products';
import Children from '../../sandbox/Children';
import Loading from '../../loading/Loading';
import { changeProductPrice } from '../../../redux/reducers/wishListReducer';
const WishlistItem = ({ products, userId }) => {
    const [acceptedProducts, setAcceptedProducts] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [discardedProducts, setDiscardedProducts] = useState([])
    const [carts, setCarts] = useState([]);
    const allApproved = useSelector(
        (state) => state.children.ChildrenApprovedItems
    );
    const getCarts = async () => {
        try {
            setIsLoading(true)
            const response = await CartFinder.get(products);
            console.log(response);
            setCarts(response.data.products)
            setIsLoading(false)
        } catch (err) {
            console.log(err)
        };
    };

    const dispatch = useDispatch();
    const addProduct = (product, id) => {
        console.log(product)
        const copiedState = [...acceptedProducts, product];
        setAcceptedProducts(copiedState);
        RemoveProductFromContainer(product);
        dispatch(setChildrenItemApproved({
            userId,
            products: [product],
        }))
        dispatch(setCartItems({
            productId: product.productId,
            quantity: product.quantity
        }))
        discountProduct(product.productId)
    };
    const declineProduct = (product) => {
        const copiedState = [...discardedProducts, product];
        setDiscardedProducts(copiedState);
        RemoveProductFromContainer(product);
        dispatch(setChildrenItemDiscarded({
            userId,
            products: [product]
        }))
    };
    const discountProduct = (productId) => {
        const allProducts = [];
        allApproved.map((el) => el.products.map((z) => allProducts.push(z)));
        const howmanyItems = allProducts.filter(
            (el) => el.productId === productId
        );
        if (howmanyItems.length) {
            dispatch(
                changeProductPrice({
                    id: productId,
                    discount: (howmanyItems.length + 1) * 10,
                })
            );
        }
    };

    const RemoveProductFromContainer = (product) => {
        const copiedCart = [...carts]
        setCarts(copiedCart.filter((cart) => {
            return cart.productId !== product.productId
        }))
    };
    useEffect(() => {
        getCarts()
    }, [])
    return (
        <>
            {isLoading ? <Loading /> :
                <article className="card" id="container">
                    <div className="testing">
                        <Children userId={userId} />
                        {carts.map((data) => {
                            return (
                                <div key={data.productId} className="cardItems" >
                                    <div className="productContainer grid grid-cols-1">
                                        <Products key={data.productId} productId={data.productId} />
                                        <div className="flex col-start-3 items-center justify-end cardBtns">
                                            <button type="submit" onClick={() => addProduct(data, userId)} className="buttonAccept">Accept</button>
                                            <button type="submit" onClick={() => declineProduct(data)} className="buttonDelete">Delete</button>
                                        </div>
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
            }
        </>
    )
}

export default WishlistItem
