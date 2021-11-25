import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import ProductFinder from '../../../../api/ProductFinder';


const Products = ({ productId, props }) => {
    const [isLoading, setIsLoading] = useState(false)
    const dispatch = useDispatch()
    const [products, setProducts] = useState({
        title: "",
        price: "",
        img: "",
        id: "",
    });
    // const handleRemove = (id) => {
    //     return products.filter((item) => item.id !== id);
    // }
    const getProducts = async () => {
        try {
            setIsLoading(true)
            const response = await ProductFinder.get(`/${productId}`);
            console.log(response);
            setProducts({
                title: response.data.title,
                price: response.data.price,
                img: response.data.image,
                id: productId
            })
            // dispatch(setProduct(response.data))
            setIsLoading(false)
        } catch (err) {
            console.log(err)
        };
    };
    useEffect(() => {
        getProducts()
    }, []);
    return (
        <>
            {isLoading ? <h2 >Loading...</h2> :
                <>
                    <div className="cardItems flex " style={{ gap: 96 }}>
                        <img src={products.img} style={{ height: 100, width: 96 }} alt="" />
                        <div className="flex  flex-col items-start justify-center">
                            <p id="product_title">
                                {products.title}
                            </p>
                            <span>{products.price}€</span>
                        </div>

                    </div>
                </>

            }
        </>
    )
}

export default Products
