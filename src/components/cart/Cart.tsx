import React from 'react'
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../redux/hooks/hooks';
import { fullPrice, sumPriceNoDiscount } from '../../redux/reducers/wishListReducer';

import CartApproved from './CartApproved';
import CartCombined from './CartCombined';
import CartDiscarded from './CartDiscarded';
import CartHeader from './CartHeader'
const Cart = () => {
    const dispatch = useDispatch();
    const cart = useAppSelector(
        (state) => state.children.cart
    );
    const itemsDiscarded = useAppSelector(
        (state) => state.children.ChildrenDiscardedItems
    );
    const AllProducts = useAppSelector(
        (state) => state.products.products
    );
    const calculateQuantDiscount = (productId: number, quantity: number) => {
        const findProductPrice = AllProducts.find((el) => el.id === productId);
        if (findProductPrice) {
            let value = findProductPrice.price * quantity;
            let discount = (quantity * 10) / 100;
            const calculate = value - value * discount;
            return calculate;
        }
    };

    const calculatePrice = (productId: number, quantity: number) => {
        const findProductPrice = AllProducts.find((el) => el.id === productId);
        if (findProductPrice) {
            const calculatedPrice = findProductPrice.price * quantity;
            dispatch(sumPriceNoDiscount(calculatedPrice))
            return calculatedPrice;
        }
    };
    const sumTotal = () => {
        const copiedArr: number[] = [];
        cart.map((el) => {
            if (el.quantity > 1) {
                const findItem = calculateQuantDiscount(el.productId, el.quantity);
                dispatch(fullPrice(findItem?.toFixed(2)))
                return copiedArr.push(Number(findItem));
            } else {
                const item = calculatePrice(el.productId, el.quantity)
                return copiedArr.push(Number(item))
            }

        })
        if (copiedArr.length === 0) {
            return ""
        } else {
            const reducer = (previousValue: number, currentValue: number) => previousValue + currentValue;
            const totalPrice = copiedArr.reduce(reducer)
            dispatch(fullPrice(totalPrice.toFixed(2)))
            return totalPrice.toFixed(2)
        }
    }
    if (cart.length === 0) {
        return (
            <>
                <CartHeader items={cart.length === 0 && itemsDiscarded.length === 0} />
                <CartCombined items={cart.length === 0 && itemsDiscarded.length === 0} />
            </>
        )
    } else {
        return (
            <div >
                <CartHeader items={cart.length === 0 && itemsDiscarded.length === 0} />
                <div>
                    <span>Total Price</span>
                    <p>{sumTotal()} €</p>
                    {/* .toFixed(2) */}
                </div>
                <CartApproved />
                <CartDiscarded items={itemsDiscarded.length === 0} />
            </div>
        )

    }
}

export default Cart
