import React from 'react'
import { IProduct } from '../../../../redux/reducers/childrenSlice'
import Products from '../products/Products'

interface IDeclinedProps {
    declinedProducts: IProduct[];
}

const Declined: React.FC<IDeclinedProps> = ({ declinedProducts }) => {
    return (
        <>
            <span id="declinedLength" className="declinedSpan ">Declined items - {declinedProducts.length}</span>
            <div className="flex flex-col" style={{ gap: 16, marginTop: 16 }}>
                {declinedProducts.map((product) => {
                    return (
                        <div key={product.productId} className="declined items-center flex productContainer">
                            <Products productId={product.productId} />
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Declined
