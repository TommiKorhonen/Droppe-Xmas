import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    products: []
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProduct: (state = initialState, action) => {
            return { ...state, products: action.payload }
        }
    }

})

export const { setProduct } = productsSlice.actions

export default productsSlice.reducer