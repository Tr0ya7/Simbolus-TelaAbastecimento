import { configureStore } from '@reduxjs/toolkit'
import EmployerSlice from './reducers/employer'

const Store = configureStore({
    reducer: {
        employer: EmployerSlice
    }
})

export default Store