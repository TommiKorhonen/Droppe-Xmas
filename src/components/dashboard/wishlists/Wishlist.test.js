import React from "react";

import { render, fireEvent, cleanup, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"




import Wishlists from "./Wishlists";
import WishlistItem from "./WishlistItem";

const MockWishlist = () => {
    return (
        <Wishlists>
            <WishlistItem />
        </Wishlists>
    )
}
test("Should render new li element and have input text in it", () => {

    screen.debug()
    jest.mock('axios', () => ({
        __esModule: true,
        default: {
            get: () => ({
                data: {
                    data: [
                        {
                            id: 1,
                            title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
                            price: 109.95,
                            description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
                            category: "men's clothing",
                            image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
                            rating: {
                                rate: 3.9,
                                count: 120
                            }
                        }
                    ]

                }
            })
        }
    }));
    jest.mock('axios', () => ({
        __esModule: true,
        default: {
            get: () => ({
                data: {

                    data: [
                        {
                            id: 1,
                            userId: 1,
                            date: "2020-03-02T00:00:02.000Z",
                            products: [
                                {
                                    productId: 1,
                                    quantity: 4
                                },
                                {
                                    productId: 2,
                                    quantity: 1
                                },
                                {
                                    productId: 3,
                                    quantity: 6
                                }
                            ],
                        }
                    ]
                }
            })
        }
    }));
    const { getByTestId } = render(<MockWishlist />);
    const addBtnElement = getByTestId("btn")



})