import React from 'react'
import Products from '../products/Products'
import { IProduct } from '../../../../redux/reducers/childrenSlice'

interface IApprovedProps {
    acceptedProducts: IProduct[];
}

const Approved: React.FC<IApprovedProps> = ({ acceptedProducts }) => {
    return (
        <>
            <span id="approvedLength" className="approvedSpan">Approved items - {acceptedProducts.length}</span>
            <div className="flex flex-col" style={{ gap: 16, marginTop: 16 }}>
                {acceptedProducts.map((product) => {
                    return (
                        <div key={product.productId} className="approved items-center flex productContainer">
                            <Products productId={product.productId} />
                        </div>
                        // <h2 className="declined">{product.title}</h2>
                    )
                })}
            </div>

        </>
    )
}

export default Approved
