import { createSlice } from "@reduxjs/toolkit"

export const slice = createSlice({
    name: 'user',
    initialState: {
        cpf: '',
        isLogged: false,
    },
    reducers: {
        changeUser(state, { payload }) {
            return {...state, isLogged: true, user: payload}
        },
        logout(state) {
            return {...state, isLogged: false, user: ''}
        }
    }
})

export const { changeUser, logout } = slice.actions
export const selecUser = state => state.cpf