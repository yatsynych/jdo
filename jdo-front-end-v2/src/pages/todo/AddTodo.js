import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function useInputValue(defaultValue = '') {
    const [value, setValue] = useState(defaultValue)
    return {
        bind: {
            value,
            onChange: event => setValue(event.target.value)
        },
        clear: () => setValue(''),
        value: () => value
    }
}

function AddTodo({ onCreate}) {  

    const input = useInputValue('')

    function submitHandler(event) {
        event.preventDefault()

        if (input.value().trim()) {
            onCreate(input.value())
            input.clear()
        }
    }

    return (
        <form onSubmit={submitHandler}>
            <TextField
                {...input.bind}
                label="Todo Title"
                id="outlined-size-small"
                size="small"
            />
            <Button type="submit" size="small" variant="outlined">Add Todo</Button>
        </form>
    )
}

export default AddTodo