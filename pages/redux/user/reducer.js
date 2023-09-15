const initialState = {
    currentUser: null,
}

const userReducer = (state = initialState, action) => {
    if (action.type == "user/login") {
        return { ...state, currentUser: 2 }
    }
    
    return state
}

export default userReducer