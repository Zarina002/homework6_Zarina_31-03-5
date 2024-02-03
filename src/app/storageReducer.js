import { createSlice } from "@reduxjs/toolkit";

const storageSlice = createSlice({
    name: "storage",
    initialState: {
        products: [], 
    },
    reducers: {
        addItem: (state, action) => {
            const newItem = action.payload;
            state.products.push(newItem);
        },
    },
});

export const { addItem } = storageSlice.actions;

export default storageSlice.reducer;