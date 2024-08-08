import { createContext } from "react"
import { useNavigate } from "react-router"
import { register } from "../services/authServices"
import { useState } from "react"

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

    const navigate = useNavigate()
    const [authState, setAuthState] = useState({})

    const registerSubmitHandler = async (data) => {
        const result = await register(data)

        setAuthState(result)
        console.log('AuthState')
        console.log(authState.accessToken)
        navigate('/')
    }

    const values = {
        registerSubmitHandler,
        isAuthenticated: Boolean(authState.accessToken),
        username: authState.username,
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