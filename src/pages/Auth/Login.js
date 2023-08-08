import React, { useState } from 'react'
import { message } from 'antd'
import { useAuthContext } from 'contexts/AuthContext'

export default function Login() {

    const { dispatch } = useAuthContext()
    const [state, setState] = useState({ email: "", password: "" })

    const handleChange = e => setState(s => ({ ...s, [e.target.name]: e.target.value }))

    const handleSubmit = () => {
        let { email, password } = state

        const users = JSON.parse(localStorage.getItem("users")) || []

        let user = users.find(user => user.email === email)

        if (user) {
            if (user.password === password) {
                dispatch({ type: "SET_LOGGED_IN", payload: { user } })
            } else {
                message.error("Password isn't valid")
            }
        } else {
            message.error("User not found")
        }

    }

    return (
        <main>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>Login</h1>
                        <h2>Login with email and password</h2>
                        <input type="email" name='email' placeholder='Email' onChange={handleChange} />
                        <button className='btn btn-primary w-100' onClick={handleSubmit}>Login</button>
                    </div>
                </div>
            </div>
        </main>
    )
}
