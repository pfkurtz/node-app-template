// Todo Actions
const ADD_TODO = 'ADD_TODO';
const addTodoAction = {
    type: ADD_TODO
}

/**
 * Reducer for the 'todos' component.
 * @param  {array} [state=[]] - List of todos.
 * @param  {object} [action=] - A todo action.
 * @return {array} List of todos.
 *
 */
export function todosApp (
    state = []: Array,
    action = addTodoAction: Object
): Array {
    // return new state (no mutations) using action
    // or return current state

    switch (action.type) {
        case ADD_TODO:
            return state.concat([{ text: '' }]);

        default:
            return state;
    }
};
