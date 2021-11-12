import React, { useEffect, useState } from 'react'
import ProductFinder from '../../../api/ProductFinder';

const Products = ({ productId }) => {
    const [isLoading, setIsLoading] = useState(false)
    const [products, setProducts] = useState({
        title: "",
        price: "",
        img: "",
    });
    const getProducts = async () => {
        try {
            setIsLoading(true)
            const response = await ProductFinder.get(`/${productId}`);
            // console.log(response);
            setProducts({
                title: response.data.title,
                price: response.data.price,
                img: response.data.image,
            })
            setIsLoading(false)
        } catch (err) {
            console.log(err)
        };
    };
    useEffect(() => {
        getProducts()
    }, [])
    return (
        <>
            {isLoading ? <h2 >Loading...</h2> :
                <div className="cardImg grid grid-cols-3">
                    <img src={products.img} style={{ height: 100, width: 96 }} alt="" />
                    <div className="flex flex-col justify-center">
                        <p>
                            {products.title}
                        </p>
                        <span>{products.price}€</span>
                    </div>
                    <div className="flex items-center justify-end cardBtns">
                        <button className="buttonAccept">Accept</button>
                        <button className="buttonDelete">Delete</button>
                    </div>
                </div>
            }
        </>
    )
}

export default Products
