import React, { Component, PropTypes } from 'react';

export default class AddTodo extends Component {
    render() {
        return (
            <div>
                <input type="text" ref="input" />
                <button onClick={e => this.handleClick(e)}>
                    Add
                </button>
            </div>
        );
    }
}
