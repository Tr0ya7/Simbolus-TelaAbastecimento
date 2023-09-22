import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentCpf: ''
}

const EmployerSlice = createSlice({
    name: 'employer',
    initialState,
    reducers: {
        saveData: (state, { payload }) => {
            return state.currentCpf = payload
        }
    }
})

export const { saveData } = EmployerSlice.actions
export default EmployerSlice.reducer