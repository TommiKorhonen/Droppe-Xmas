import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import WishlistItem from './WishlistItem'

const Wishlists = () => {
    const { children } = useSelector((state) => state.children); // Redux Main State

    return (
        <section className="flex flex-col wishListContainer">
            {children.map((child) => {
                return (
                    <WishlistItem key={child.id} userId={child.id} products={`/${child.id}`} />
                )
            })}
        </section>

    )
}

export default Wishlists
