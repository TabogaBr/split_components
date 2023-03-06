import React from 'react';
import TodoTable from './TodoTable';

export default function Todolist() {
    const [todo, setTodo] = React.useState({ description: '', date: '' });
    const [todos, setTodos] = React.useState([]);

    const handleAddTodo = () => {
        setTodos([todo, ...todos]);
        setTodo({ description: '', date: '' });
    };

    const handleDoneTodo = (row) => {
        setTodos(todos.filter((todo, index) => index !== row));
    };

    return (
        <div>
            <h1>My TodoList</h1>
            <p>Description:
                <input
                    placeholder='Description'
                    value={todo.description}
                    onChange={e => setTodo({ ...todo, description: e.target.value })}
                />
                Date:
                <input
                    type='date'
                    placeholder='Date'
                    value={todo.date}
                    onChange={e => setTodo({ ...todo, date: e.target.value })}
                />
                <button onClick={handleAddTodo}>Add Todo</button>
                <TodoTable todos={todos} deleteTodo={handleDoneTodo} />
            </p>
        </div>
    )
}