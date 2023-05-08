import { configureStore } from "@reduxjs/toolkit";
import basketSlice from "./slices/CartSlice";

const store=configureStore({
    reducer:{
        basket:basketSlice.reducer,
    },
});
export default store;