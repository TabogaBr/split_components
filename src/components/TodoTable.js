import React from 'react';

export default function TodoTable(props) {
    return (
        <table>
            <thead>
                <td>
                    Date
                </td>
                <td>
                    Description
                </td>
            </thead>
            <tbody>
                {
                    props.todos.map((todo, index) =>
                        <tr key={index}>
                            <td>{todo.date}</td>
                            <td>{todo.description}</td>
                            <td><button onClick={() => props.deleteTodo(index)}>Done</button></td>
                        </tr>)
                }
            </tbody>
        </table>
    )
}