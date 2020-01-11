import React from 'react'

const Todo = ({
    onClick,
    completed,
    text
}) => (
    <li 
        style={{
            textDecoration: completed ? 'line-through' : 'none', 
            fontWeight: 'bolder'
        }} 
        onClick={onClick}> 
            {text} 
    </li>
)

export default Todo