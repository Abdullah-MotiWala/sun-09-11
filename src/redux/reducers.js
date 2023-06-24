export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case "sginIn":
            return { isLoggedIn: action.payload }
        case "logOut":
            return { isLoggedIn: false }
        default:
            return state
    }
}


