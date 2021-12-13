import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import CartFinder from '../../api/CartFinder';
import { useAppSelector } from '../../redux/hooks/hooks';
import Products from '../dashboard/wishlists/products/Products';

const ConfirmedScreen = () => {
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate();
    const postCart = async () => {
        setIsLoading(true)
        try {
            const response = await CartFinder.post("/", {
                "products": cart
            })
            navigate("/Droppe-Xmas");
            setIsLoading(false)
            console.log(response)
            window.location.reload()
        } catch (err) {
            console.log(err)
        }
    };

    const totalValue = useAppSelector(
        (state) => state.products.fullPrice
    );


    const cart = useAppSelector(
        (state) => state.children.cart
    );
    if (!isLoading) {
        return (
            <div>
                <h2>Total Price: {totalValue} €</h2>
                <button type="submit" onClick={() => postCart()}>Submit Cart</button>
                {cart.map((items) => {
                    return (
                        <div key={items.productId} className="grid grid-cols-2 confirmedBox" style={{ marginTop: 20 }}>
                            <div className="flex items-center justify-center" >
                                <Products productId={items.productId} />
                            </div>
                            <div className="flex items-center justify-center confirmedBorder">
                                <p>Quantity: {items.quantity}</p>
                            </div>
                        </div>
                    )
                })}
                {/* <span>{sumPriceWithoutDiscount}</span> */}
            </div>
        )
    } else {
        return <h2 className="text-4xl" style={{ textAlign: "center" }}>Thank you for your purchase!</h2>
    }

}

export default ConfirmedScreen
