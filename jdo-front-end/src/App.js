import React, {useState, useEffect} from 'react';
//import ReactDOM from 'react-dom';
import TodoList from './todo/TodoList';
import Context from './context';
import AddTodo from './todo/AddTodo';
import Loader from './Loader';

function App() {

/*
{id: 1, complited: false, title: 'Test todo item 1'},
{id: 2, complited: false, title: 'Test todo item 2'},
{id: 3, complited: false, title: 'Test todo item 3'}
*/
    const [todos, setTodos] = useState([])
    const [loading, setLoading] = useState(true)
    const url1 = 'http://localhost:4000/todo/'
    const url2 = 'https://jsonplaceholder.typicode.com/todos?_limit=5'

    useEffect(() => {
        fetch(url1)
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

export default App