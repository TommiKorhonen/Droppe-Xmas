import { createSlice } from "@reduxjs/toolkit";


const initialState = {
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
    ChildrenDiscardedItems: []
}

export const childrenSlice = createSlice({
    name: 'children',
    initialState,
    reducers: {
        getChildren: (state, action) => {
            return state.children
        },
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
        }
    }

})

export const { getChildren, setChildrenItemApproved, setChildrenItemDiscarded } = childrenSlice.actions

export default childrenSlice.reducer