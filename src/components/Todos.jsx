import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, updateTodo } from '../feature/todoFeatures/todoSlice';

const Todos = () => {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();
    
    const [editedText, setEditedText] = useState('');
    const [editedTodoId, setEditedTodoId] = useState(null);

    const handleEditToggle = (todo) => {
        if (editedTodoId === todo.id) {
            if (editedText.trim() !== '') {
                dispatch(updateTodo({ id: editedTodoId, newText: editedText }));
                setEditedText('');
                setEditedTodoId(null);
            }
        } else {
            setEditedText(todo.text);
            setEditedTodoId(todo.id);
        }
    };

    return (
        <>
            {todos.map((todo) => (
                <li key={todo.id}>
                    {editedTodoId === todo.id ? (
                        <>
                            <input
                                type="text"
                                value={editedText}
                                onChange={(e) => setEditedText(e.target.value)}
                            />
                        </>
                    ) : (
                        <>
                            <span>{todo.text}</span>
                        </>
                    )}
                    
                    <button onClick={() => handleEditToggle(todo)}>{editedTodoId === todo.id ? 'Save' : 'Edit'}</button>

                    <button onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
                </li>
            ))}
        </>
    );
};

export default Todos;
