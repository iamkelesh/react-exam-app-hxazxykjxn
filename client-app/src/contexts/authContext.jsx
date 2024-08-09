import { createContext } from "react"
import { useNavigate } from "react-router"
import { login, register } from "../services/authServices"
import { useState } from "react"

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

    const navigate = useNavigate()
    const [authState, setAuthState] = useState({})

    const registerSubmitHandler = async (data) => {
        const result = await register(data)
        setAuthState(result)
        navigate('/')
    }

    const loginSubmitHandler = async (data) => {
        const result = await login(data)

        setAuthState(result)
    }

    const values = {
        registerSubmitHandler,
        loginSubmitHandler,
        authState,
        isAuthenticated: !!authState.accessToken,
        fullName: authState.fullName,
        email: authState.email,
        userId: authState._id,

    }

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext