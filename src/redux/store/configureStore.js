import { configureStore } from "@reduxjs/toolkit";
import childrenSlice from "../reducers/childrenSlice";
import wishListReducer from "../reducers/wishListReducer";



export default configureStore({
    reducer: {
        products: wishListReducer,
        children: childrenSlice
    }
})
