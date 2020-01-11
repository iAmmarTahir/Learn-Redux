import React from 'react'
import ReactDOM from 'react-dom'
import store from './redux/store'
import TodoApp from './TodoApp'


const render = () => {
    ReactDOM.render(<TodoApp {...store.getState()}/>,
        document.getElementById("app"))
}

store.subscribe(render)
render()