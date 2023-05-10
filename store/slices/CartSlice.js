import { createSlice } from "@reduxjs/toolkit";

const basketSlice = createSlice({
    name: 'basketSlice',
    initialState: [],
    reducers: {
        addToBasket(state, action) {
            //Pushing data to store
            state.push(action.payload);
            
        },
        removeFromBasket(state, action) {
            //Removeing item from Basket
            const idToRemove = action.payload;
            return state.filter((item) => item.id !== idToRemove);

        },
        emptyBasket(state,action){
            return []
        }
    }
})
export default basketSlice;
export const { addToBasket, removeFromBasket,emptyBasket } = basketSlice.actions;