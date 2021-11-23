import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import CartFinder from '../../../api/CartFinder';
import { setProducts } from '../../../redux/reducers/wishListReducer';
import Loading from '../../loading/Loading';
import WishlistItem from './WishlistItem'

const Wishlists = () => {
    const [carts, setCarts] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const getCarts = async () => {
        try {
            setIsLoading(true)
            const response = await CartFinder.get("/?limit=5");
            console.log(response);
            setCarts(response.data)
            // setUserId(response.data.filter(el => el.userId === "userId"))
            setIsLoading(false)
        } catch (err) {
            console.log(err)
        };
    };

    useEffect(() => {
        getCarts();

    }, []);
    return (
        <section className="flex flex-col wishListContainer">
            {isLoading ? <Loading /> :
                carts.map((data) => {
                    return (
                        <WishlistItem userId={data.userId} key={data.id} products={data.products} />

                    )
                })}
        </section>

    )
}

export default Wishlists
