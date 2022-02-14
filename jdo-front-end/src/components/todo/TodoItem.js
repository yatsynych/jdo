import React, {useContext} from 'react';
import Context from '../../context';

function TodoItem({todo,  index, onChange}) {
    const {removeTodo} = useContext(Context)
    const classes = []

    if (todo.complited) {
        classes.push('done');
    }

    return <li>
        <span className={classes.join(' ')}>
            <input
                type="checkbox"
                checked={todo.complited}
                onChange={() => onChange(todo.id)}
            />
            {todo.title}
        </span>
        <button onClick={removeTodo.bind(null, todo.id)}>&times;</button>
    </li>
}

export default TodoItem