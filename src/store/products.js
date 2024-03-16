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

        clearProducts(state, action){
            for (let i = 0; i < state.data.length; i++){
                state.data.pop();
            }
        },

        deleteProduct(state, action) {
            state.data = state.data.filter(item => item.id !== action.payload.id);
        },

        changeQuantity(state, action){
            const isHas = state.data.filter(item => item.id === action.payload.id);
            if (isHas.length){
                state.data = state.data.map(item => {
                    if (item.id === action.payload.id){
                        item.quantity = action.payload.quantity;
                    }
                    return item;
                });
            }
        }
    }
});

export const { addProduct, clearProducts, deleteProduct, changeQuantity } = productSlice.actions;

export default productSlice.reducer;