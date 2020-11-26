import React, { Component } from 'react'

    class Posts extends Component {
        constructor(props) {
            super(props);
            this.state = {
            comments: []
            };
        }

        componentWillMount() {
            fetch('http://localhost:3000/api/v1/notes')
            .then(res => res.json())
            .then(data => this.setState({ comments: data }));
        }


        
        render() {
            const commentItems = this.state.comments.map(note => (
                <div key={note.id}>
                    
                    <p>{note.comments}</p>
                </div>
            ));
            return (
                <div>
                    <h1>Posts</h1>
                    {commentItems}
                </div>
            )
        }
    }

export default Posts;
