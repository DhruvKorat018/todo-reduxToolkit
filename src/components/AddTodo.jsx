import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../feature/todoFeatures/todoSlice'

const AddTodo = () => {

    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }

    return (
        <>
            <form>
                <input type="text"
                    value={input}
                    onChange={(e) => { setInput(e.target.value) }}
                />
                <button onClick={addTodoHandler}>Add todo</button>
            </form>
        </>
    )
}


export default AddTodo
