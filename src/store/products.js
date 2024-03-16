import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: []
};

const productSlice = createSlice({
    name : "products",
    initialState,
    reducers : {
        addProduct(state, action) {
            const result = action.payload;
            const isHas = state.data.filter(item => item.id === result.id);
            if (!isHas.length){
                state.data.push(result)
            }
        },

        deleteProduct(state, action) {
            state.data = state.data.filter(item => item.id !== action.payload.id);
        }
    }
});

export const { addProduct, deleteProduct } = productSlice.actions;

export default productSlice.reducer;