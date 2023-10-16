import { createContext, useState } from "react"

export const UserContext = createContext()
UserContext.displayName = 'User'

export const UserProvider = ({ children }) => {
    const [cpf, setCpf] = useState('')
    const [type, setType] = useState('')

    return (
        <UserContext.Provider value={{ cpf, setCpf, type, setType }}>
            { children }
        </UserContext.Provider>
    )
}