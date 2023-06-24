import { combineReducers, createStore } from "redux"
import { authReducer } from "./reducers"

const initialState = {
    isUserLoggedId: false,
}

const rootReducers = combineReducers({
    auth: authReducer
})


const store = createStore(rootReducers, initialState)

export default store