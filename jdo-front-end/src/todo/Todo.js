import React, {useState, useEffect} from 'react';
import Context from '../context';
import Loader from '../Loader';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

function Todo() {

    const [todos, setTodos] = useState([])
    const [loading, setLoading] = useState(true)
    const url = 'http://localhost:4000/todo/'

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(todos => {
                setTimeout(() => {
                    setTodos(todos)
                    //console.log(todos)
                    setLoading(false)
                }, 2000)
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
            <div className="wrapper">
                <h1>jDO</h1>
                    <AddTodo onCreate={addTodo} />
                {loading && <Loader />}
                {todos.length ? (
                    <TodoList todos={todos} onToggle={toggleTodo} />
                ) : loading ? null : (
                    <p>No todos!</p>
                )}
            </div>
        </Context.Provider>
    );
}

export default Todo