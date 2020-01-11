import AddTodo from './AddTodo'
import Footer from './Footer'
import TodoList from './TodoList'
import React from 'react'
import store from './redux/store'

const getVisibleTodos = (
    todos,
    filter
) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed)
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed)
    }
}

let nextTodoId = 0

const TodoApp = ({
    todos,
    visibilityFilter
}) => (
            <div>
                <AddTodo onAddClick={text => 
                    store.dispatch({
                        type: 'ADD_TODO',
                        id: nextTodoId++,
                        text
                    })
                }/>
                <TodoList 
                    todos={getVisibleTodos(
                        todos,
                        visibilityFilter
                    )}
                    onTodoClick={id => 
                        store.dispatch({
                            type: 'TOGGLE_TODO',
                            id
                        })
                    }/>
               <Footer visibilityFilter={visibilityFilter} onFilterClick={ filter => store.dispatch({
                   type: 'SET_VISIBILITY_FILTER',
                   filter
               })}/>
            </div>   
)

export default TodoApp