import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchComments } from '../actions/commentActions';

class Comments extends Component {

    componentWillMount() {
        this.props.fetchComments();
    }

    render() {
        const commentItems = this.props.comments.map(note => (
            <div key={note.id}>
                <p>{note.comments}</p>
               
            </div>
        ));
        return (
            <div>
                <h1>Notes</h1>
                {commentItems}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    comments: state.notes.comments
});

export default connect(mapStateToProps, { fetchComments })(Comments);