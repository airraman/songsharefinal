import { createSlice } from "@reduxjs/toolkit";

export const optionSelectSlice = createSlice({
    name: "optionSelect",
    initialState: { value: {option: ""}},
    
    reducers: {
        changeOption: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { changeOption } = optionSelectSlice.actions
export default optionSelectSlice.reducer