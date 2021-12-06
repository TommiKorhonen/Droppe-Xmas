import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ProductFinder from '../../../api/ProductFinder';
import { setProduct } from '../../../redux/reducers/wishListReducer';
import WishlistItem from './WishlistItem'

const Wishlists = () => {
    const { children } = useSelector((state) => state.children); // Redux Main State
    const dispatch = useDispatch()
    const setAllProducts = async () => {
        try {
            const response = await ProductFinder.get("");
            dispatch(setProduct(response.data))
        } catch (err) {
            console.log(err)
        }

    }
    useEffect(() => {
        setAllProducts();
    }, [])
    return (
        <section className="flex flex-col wishListContainer">
            {children.map((child) => {
                return (
                    <WishlistItem key={child.id} userId={child.id} products={`/${child.id}`} />
                )
            })}
        </section>

    )
}

export default Wishlists
