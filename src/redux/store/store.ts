import { configureStore } from "@reduxjs/toolkit";
import childrenSlice from "../reducers/childrenSlice";
import wishListReducer from "../reducers/wishListReducer";



export const store = configureStore({
    reducer: {
        products: wishListReducer,
        children: childrenSlice
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch