import React from 'react'

export default function Register() {


    const handleRegister = () => {
        let { fullName, email, password } = {}

        fullName = fullName.trim()
        email = email.trim()

        if (fullName.length < 3) { return alert("Please enter your full name") }
        if ("emailRegex".test(email)) { return alert("Please enter a valid email address") }
        if (password.length < 6) { return alert("Password must be minimum 6 chars") }

        const user = { fullName, email, password }

        const users = JSON.parse(localStorage.getItem("users")) || []

        let isFound = users.find(u => u.email === user.email)

        if (!isFound) {
            users.push(user)
        } else {
            alert("User is already registered")
        }

    }

    return (
        <main>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>Register</h1>
                        <h2>Register with full name, email, password, confirmPassword</h2>
                    </div>
                </div>
            </div>
        </main>
    )
}
