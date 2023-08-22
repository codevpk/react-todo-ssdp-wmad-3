import React from 'react'

export default function Home() {

    const handleSubmit = () => {

        let { title, location, date, description } = {}

        let todo = {
            title, location, date, description,
            id: Math.random().toString(36).slice(2),
            status: "active",
            dateCreated: new Date()
        }
    }

    return (
        <main>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>Dashboard Home | New Todo</h1>
                        <h2>New Todo with: title, location, date, desription</h2>
                    </div>
                </div>
            </div>
        </main>
    )
}
