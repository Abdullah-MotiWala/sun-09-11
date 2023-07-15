import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isUserLoggedId: false,
    user: null
}


export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            state.isUserLoggedId = action.payload
        },
        signUp: (state, { payload }) => {
            state.user = payload
        }
    }
})

export const { login, signUp } = userSlice.actions
export default userSlice.reducer
