import { createSlice } from "@reduxjs/toolkit";

export const userSelectSlice = createSlice({
    name: "userSelect",
    initialState: { value: {user: ""}},
    
    reducers: {
        changeUser: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { changeUser } = userSelectSlice.actions
export default userSelectSlice.reducer