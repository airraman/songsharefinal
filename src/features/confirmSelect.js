import { createSlice } from "@reduxjs/toolkit";

export const confirmSelectSlice = createSlice({
    name: "confirmSelect",
    initialState: { value: "Listener"},
    
    reducers: {
        confirmOption: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { confirmOption } = confirmSelectSlice.actions
export default confirmSelectSlice.reducer