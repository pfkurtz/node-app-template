// Todo Actions
const ADD_TODO = 'ADD_TODO';
const addTodoAction = {
    type: ADD_TODO,
    payload: {
        text: ''
    }
}

const UPDATE_TODO = 'UPDATE_TODO';

/**
 * Reducer for the 'todos' component.
 * @param  {array} [state=[]] - List of todos.
 * @param  {object} [action=addTodoAction] - A todo action, consisting of type {string}, payload {object} and [error] {boolean}.
 * @return {array} List of todos.
 */
export function todosApp (state = [], action = addTodoAction
) {
    // return new state (no mutations) using action
    // or return current state

    switch (action.type) {
        case ADD_TODO:
            return state.concat([action.payload]);

        default:
            return state;
    }
};
