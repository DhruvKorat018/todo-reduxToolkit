import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {
    todos: [{ id: 1, text: 'testing text 1' }]
}
export const todoSlice = createSlice({
    name: 'myTodo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
            }
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            state.todos.forEach((todo) => {
                if (todo.id == action.payload.id) {
                    return todo.text = action.payload.newText
                } else {
                    return todo;
                }
            })
        }

    }
})


export const { addTodo, removeTodo, updateTodo } = todoSlice.actions

export default todoSlice.reducer;
