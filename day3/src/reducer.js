export const initialState = {
    todos: {},
    users: {},
};

function reducer(state, action) {
    switch(action.type) {
        case 'ADD_TO_TODOS':
            return({
                ...state,
                todos: action.item,
            });
        case 'ADD_TO_USERS':
            return({
                ...state,
                users: action.item,
            });
        default:
            return state;
    }
}

export default reducer;