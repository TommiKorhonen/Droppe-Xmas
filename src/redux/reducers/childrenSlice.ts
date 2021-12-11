
import { RootState } from './../store/store';
import { createSlice } from "@reduxjs/toolkit";


interface IReduxChildrenSlice {
    children: { id: number; name: string; }[];
    ChildrenApprovedItems: IApproved[];
    ChildrenDiscardedItems: IApproved[];
    cart: IProduct[];
}
export interface IApproved {
    userId: number;
    products: IProduct[];
}
export interface IProduct {
    productId: number;
    quantity: number;
}

const initialState: IReduxChildrenSlice = {
    children: [

        {
            name: "Ari",
            id: 1
        },
        {
            name: "Jari",
            id: 2
        },

        {
            name: "Ella",
            id: 3
        },

        {
            name: "Pekka",
            id: 4
        },

        {
            name: "Anssi",
            id: 5
        },
    ],
    ChildrenApprovedItems: [],
    ChildrenDiscardedItems: [],
    cart: []
}

export const childrenSlice = createSlice({
    name: 'children',
    initialState,
    reducers: {
        setChildrenItemApproved: (state, action) => {
            const copyApprovedState = [...state.ChildrenApprovedItems];
            const findIndex = copyApprovedState.findIndex(
                (el) => el.userId === action.payload.userId
            );
            //If the user is already there , it finds its index and just updates the products array.
            if (findIndex !== -1) {
                copyApprovedState[findIndex].products.push(action.payload.products[0]);
            } else {
                copyApprovedState.push(action.payload);
            }
            state.ChildrenApprovedItems = copyApprovedState;
        },
        setChildrenItemDiscarded: (state, action) => {
            const copyDiscardedState = [...state.ChildrenDiscardedItems];
            const findIndex = copyDiscardedState.findIndex(
                (el) => el.userId === action.payload.userId
            );
            //If the user is already there , it finds its index and just updates the products array.
            if (findIndex !== -1) {
                copyDiscardedState[findIndex].products.push(action.payload.products[0]);
            } else {
                copyDiscardedState.push(action.payload);
            }
            state.ChildrenDiscardedItems = copyDiscardedState;
        },
        setCartItems: (state, action) => {
            const copyCartState = [...state.cart];
            const product = { productId: action.payload.productId, quantity: 1 }
            const findIndex = copyCartState.findIndex(
                (el) => el.productId === action.payload.productId
            );
            if (findIndex !== -1) {
                copyCartState[findIndex].quantity++;
            } else {
                copyCartState.push(product);
            }
            state.cart = copyCartState;
        },

        // Changes price of product if there is Discount on it


    }

})

export const { setChildrenItemApproved, setChildrenItemDiscarded, setCartItems } = childrenSlice.actions
export const selectCount = (state: RootState) => state;
export default childrenSlice.reducer