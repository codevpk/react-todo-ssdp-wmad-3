import React, { useState, useEffect, createContext, useContext, useReducer } from 'react'

const AuthContext = createContext()

const initialState = { isAuth: false, user: {} }
const reducer = (state, { action, payload }) => {
    switch (action) {
        case "SET_LOGGED_IN":
            return { ...state, isAuth: true, user: payload.user }
        case "SET_LOGGED_OUT":
            return initialState
        default:
            return state
    }
}

export default function AuthContextProvider({ children }) {

    const [state, dispatch] = useReducer(reducer, initialState)
    const [isAppLoading, setIsAppLoading] = useState(true)

    useEffect(() => {
        const isLoggedIn = localStorage.getItem("isLoggedIn")
        console.log('isLoggedIn', isLoggedIn)
        if (isLoggedIn === "true") {
            const user = JSON.parse(localStorage.getItem("user"))
            dispatch({ type: "SET_LOGGED_IN", payload: { user } })
        }
        setTimeout(() => {
            setIsAppLoading(false)
        }, 1500)
    }, [])

    return (
        <AuthContext.Provider value={{ ...state, dispatch, isAppLoading }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => useContext(AuthContext)