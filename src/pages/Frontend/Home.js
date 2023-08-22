import React, { useState } from 'react'

export default function Home() {

    const [todos, setTodos] = useState([])

    const handleDelete = todo => {
        const todos = JSON.parse(localStorage.getItem("todos"))

        const todosAfterDelete = todos.filter(t => t.id !== todo.id)

        localStorage.setItem("todos", JSON.stringify(todosAfterDelete))

        setTodos(todosAfterDelete)
    }

    return (
        <main>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>All Todos in a table</h1>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Title</th>
                                    <th>Location</th>
                                    <th>Date</th>
                                    <th>Description</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {todos.map((todo, i) => {
                                    return <tr key={i}>
                                        <th>1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                        <td>Otto</td>
                                        <td>Edit | <span onClick={() => { handleDelete(todo) }}>Delete</span></td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </main>
    )
}
