import { createContext, useState } from "react"

export const UserContext = createContext()
UserContext.displayName = 'User'

export const UserProvider = ({ children }) => {
    const path = 'http://192.168.2.199:5000'
    const [id, setId] = useState('')
    const [type, setType] = useState('')

    return (
        <UserContext.Provider value={{path, id, setId, type, setType}}>
            { children }
        </UserContext.Provider>
    )
}