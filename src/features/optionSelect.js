import { createSlice } from "@reduxjs/toolkit";

export const optionSelectSlice = createSlice({
    name: "optionSelect",
    initialState: { value: "Listener"},
    
    reducers: {
        changeOption: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { changeOption } = optionSelectSlice.actions
export default optionSelectSlice.reducer