import React, { Component } from 'react';

import { connect } from 'react-redux';
import { createComment } from '../actions/commentActions';

class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: '',
            user_id: ''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();

        const newComment = {
            comments: this.state.comments,
            
        };

        this.props.createComment(newComment);
    }

    render() {
        return (
            <div>
                <h1>Add Note</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Note: </label>
                        <br />
                        <input
                            type="text"
                            name="comments"
                            onChange={this.onChange}
                            value={this.state.comments}
                        />
                    </div>
                    <br />
  
                    <br />
                    <button type="submit">Submit</button>

                    <label>Choose Category: </label>
                    <select value={this.state.user_id} name='user_id' onChange={this.onChange}>
                        <option value="" disabled=""></option>
                        <option value="1">Black Tea</option>
                        <option value="2">Green Tea</option>
  
                    </select><br></br>

                </form>
            </div>
        );
    }
}

export default connect(null, { createComment })(CommentForm);