import React from 'react'
import Products from '../products/Products'

const Declined = ({ declinedProducts }) => {
    return (
        <>
            <span id="declinedLength" className="declinedSpan ">Declined items - {declinedProducts.length}</span>
            <div className="flex flex-col" style={{ gap: 16, marginTop: 16 }}>
                {declinedProducts.map((product) => {
                    return (
                        <div className="declined items-center flex productContainer">
                            <Products productId={product.productId} />
                        </div>
                        // <h2 className="declined">{product.title}</h2>
                    )
                })}
            </div>
        </>
    )
}

export default Declined
