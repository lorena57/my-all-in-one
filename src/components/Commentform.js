import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createComment } from "../actions/commentActions";

class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: ''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

   onChange(e) {
       this.setState({[e.target.name]: e.target.value});
   }
 
    onSubmit(e) {
        e.preventDefault();

        const comments = {
            comment: this.state.comments
        };

        this.props.createComment(comments)
    }

    render() {
        return (
            <div>
                <h1>Add note</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Note:</label><br />
                        <textarea name="comments" onChange={this.onChange} value={this.state.comments} cols="30" rows="10" />
                    </div>
                    <br/>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}



export default connect(null, { createComment })(CommentForm);
