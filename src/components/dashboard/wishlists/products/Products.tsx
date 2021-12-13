import React, { useEffect, useState } from 'react'

import ProductFinder from '../../../../api/ProductFinder';
import { useAppSelector } from '../../../../redux/hooks/hooks';

interface IProdcutProps {
    productId: number
}

// }
export interface IProductStateDesc {
    id: number;
    title: string;
    price: number;
    img: string;
    discount?: number
}

const Products: React.FC<IProdcutProps> = ({ productId }) => {
    const [isLoading, setIsLoading] = useState(false);
    const discountPercent = useAppSelector((state) => state.products.products);
    const [products, setProducts] = useState<IProductStateDesc>({
        title: "",
        price: 0,
        img: "",
        id: 0,
        discount: 0
    });

    const findDiscountFromState = () => {
        if (productId !== null) {
            const findDiscount = discountPercent.find(
                (el) => el.id === productId
            )
            return findDiscount?.discount
        } else {
            return 0
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
                    <div className="cardItems flex" style={{ gap: 96 }}>
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
