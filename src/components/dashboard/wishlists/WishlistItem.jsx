import React, { useEffect, useState } from 'react'
import CartFinder from '../../../api/CartFinder'
import Products from './Products';
import Users from './Users';

const WishlistItem = () => {
    const [carts, setCarts] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const getCarts = async () => {
        try {
            setIsLoading(true)
            const response = await CartFinder.get("/?limit=5");
            console.log(response.data);
            setCarts(response.data)
            setIsLoading(false)
        } catch (err) {
            console.log(err)
        };
    };

    useEffect(() => {
        getCarts();

    }, []);
    return (
        <>
            {isLoading ? <h2 className="loading">Loading...</h2> :
                carts.map((cart) => {
                    return (
                        <article className="card" key={cart.id}>
                            <div className="cardContainer">
                                <Users userId={cart.userId} />
                                {/* Item, name, price and accept delete btn*/}
                                <div className="cardItems flex flex-col">
                                    {cart.products.map((data) => {
                                        return (
                                            <Products key={data.productId} productId={data.productId} />
                                        )
                                    })}
                                </div>
                                <div className="flex flex-col items-center justify-center approvedContainer">
                                    <span className="approved">Approved items - 0</span>
                                    <span className="declined">Declined items - 0</span>
                                </div>
                            </div>
                        </article>
                    )
                })}
        </>
    )
}

export default WishlistItem
