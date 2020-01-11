import todos from './todos.reducer'
import visibilityFilter from './visibilityFilter.reducer'
import { combineReducers, createStore } from 'redux'

const todosApp = combineReducers({
    todos: todos,
    visibilityFilter: visibilityFilter
})

const store = createStore(todosApp)

export default store