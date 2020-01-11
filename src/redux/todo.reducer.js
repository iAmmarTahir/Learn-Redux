const todo = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                id: action.id,
                    text: action.text,
                    completed: action.completed
            }
            case 'TOGGLE_TODO':
                if (state.id !== action.id) {
                    return state;
                }
                return Object.assign({}, state, {
                    id: state.id,
                    text: state.text,
                    completed: !state.completed
                })
            default:
                return state
    }
}

export default todo