import React, {useState, useEffect} from 'react';
import Context from '../../context';
import Loader from '../ui/Loader';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

function Todo() {

    const [todos, setTodos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('/todo/')
            .then(response => response.json())
            .then(todos => {
                setTodos(todos)
                setLoading(false)
            })
    }, [])

    function toggleTodo(id)
    {
        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    todo.complited = !todo.complited
                }
                return todo
            })
        )
    }

    function removeTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    function addTodo(title) {
        setTodos(
            todos.concat([
                {
                    title,
                    id: Date.now(),
                    complited: false
                }
            ])
        )

    }

    return (
        <Context.Provider value={{removeTodo}}>
            <AddTodo onCreate={addTodo} />
            {loading && <Loader />}
            {todos.length ? (
                <TodoList todos={todos} onToggle={toggleTodo} />
            ) : loading ? null : (
                <p>No todos!</p>
            )}
        </Context.Provider>
    );
}

export default Todo