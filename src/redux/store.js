import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'

// import { combineReducers, createStore } from "redux"
// import { authReducer } from "./reducers"

// const initialState = {
//     isUserLoggedId: false,
//     user: null
// }

// const rootReducers = combineReducers({
//     auth: authReducer
// })


// const store = createStore(rootReducers, initialState)

// export default store




const store = configureStore({
    reducer: { auth: userReducer },
})

export default store