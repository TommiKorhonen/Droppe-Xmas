import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    products: [],
    fullPrice: 0,
    fullPriceNoDiscount: 0
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProduct: (state = initialState, action) => {
            [...state.products] = action.payload
        },
        changeProductPrice: (state, action) => {
            const copyProducts = [...state.products];
            const findIndex = copyProducts.findIndex(
                (el) => el.id === action.payload.id
            );
            //Discount if more than 1 quantity
            if (findIndex !== -1) {
                copyProducts[findIndex] = {
                    ...copyProducts[findIndex],
                    discount: action.payload.discount,
                };
            }
            state.products = copyProducts;
        },
        fullPrice: (state, action) => {
            state.fullPrice = action.payload
        },
        sumPriceNoDiscount: (state, action) => {
            state.fullPriceNoDiscount = action.payload
        }
    }

})

export const { setProduct, changeProductPrice, fullPrice, sumPriceNoDiscount } = productsSlice.actions

export default productsSlice.reducer