import { createContext, useState } from "react"

export const UserContext = createContext()
UserContext.displayName = 'User'

export const UserProvider = ({ children }) => {
    const [id, setId] = useState('')
    const [type, setType] = useState('')

    return (
        <UserContext.Provider value={{id, setId, type, setType}}>
            { children }
        </UserContext.Provider>
    )
}