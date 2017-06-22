import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

class AddTodo extends React.Component {
    state = {
        value: null
    }
    submit = e => {
        const { dispatch } = this.props;
        e.preventDefault();
        if (!this.state.value.trim()) {
            return;
        }
        dispatch(addTodo(this.state.value));
    }
    change = e => {
        this.setState({
            value: e.target.value
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submit} action="">
                    <input onChange={this.change} />
                    <button type="submit">Add Todo</button>
                </form>
            </div>
        )
    }
}

export default connect()(AddTodo);
