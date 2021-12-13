import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProductStateDesc } from "../../components/dashboard/wishlists/products/Products";
import type { RootState } from "../store/store";


interface IReduxProductSlice {
    products: IProductStateDesc[];
    fullPrice: number;
    fullPriceNoDiscount: number;
}

const initialState: IReduxProductSlice = {
    products: [],
    fullPrice: 0,
    fullPriceNoDiscount: 0
}
interface IChangePrice {
    id: number;
    discount: number;
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
        },
        changeProductPrices: (state, action: PayloadAction<IChangePrice>) => {
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
        addProductsFromApi: (state, action: PayloadAction<IProductStateDesc[]>) => {
            state.products = action.payload;
        },
    }

})

export const { setProduct, fullPrice, changeProductPrices, addProductsFromApi, sumPriceNoDiscount } = productsSlice.actions
export const selectProduct = (state: RootState) => state;
export default productsSlice.reducer