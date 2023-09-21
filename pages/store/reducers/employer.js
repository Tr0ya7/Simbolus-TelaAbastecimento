import { createSlice } from '@reduxjs/toolkit'

const initialState = ''

const EmployerSlice = createSlice({
    name: 'employer',
    initialState,
    currentCpf: '',
    currentPass: '',
    reducers: {
        saveData: (state, { payload }) => {
            return { ...state, ...payload }
        }
    }
})

export const { saveData } = EmployerSlice.actions
export default EmployerSlice.reducer