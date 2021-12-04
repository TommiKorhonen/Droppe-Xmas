import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ProductFinder from '../../../../api/ProductFinder';
import { setProduct } from '../../../../redux/reducers/wishListReducer';

// interface ProdcutProps {
//     productId: number

// }
// interface ProductStateDesc {
//     title: string;
//     price: number;
//     id: number;
//     img: string;
// }

const Products = ({ productId }) => {
    const [isLoading, setIsLoading] = useState(false)
    const discountPercent = useSelector((state) => state.products.products)
    const dispatch = useDispatch()
    const [test, setTest] = useState();
    const [products, setProducts] = useState({
        title: "",
        price: 0,
        img: "",
        id: 0,
        discount: ""
    });

    const findDiscountFromState = () => {
        if (productId !== null) {
            const findDiscount = discountPercent.find(
                (el) => el.id === productId
            )
            return findDiscount.discount
        } else {
            return ""
        }
    }

    const getProducts = async () => {
        try {
            setIsLoading(true)
            const response = await ProductFinder.get(`/${productId}`);
            // console.log(response);
            setProducts({
                title: response.data.title,
                price: response.data.price,
                img: response.data.image,
                id: productId,
                discount: findDiscountFromState()
            })
            // dispatch(setProduct(response.data))
            setIsLoading(false)
        } catch (err) {
            console.log(err)
        };
    };
    useEffect(() => {
        getProducts()

    }, [productId, discountPercent]);
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
                            {products.discount ? <span className="text-lg discount">-{products.discount}%</span> : ""}
                        </div>
                    </div>
                </>

            }
        </>
    )
}

export default Products
