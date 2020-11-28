import { FETCH_COMMENTS, NEW_COMMENTS } from "./types";


export const fetchComments = () => dispatch => {
        fetch('http://localhost:3000/api/v1/notes')
        .then(res => res.json())
        .then(comments => dispatch({
            type: FETCH_COMMENTS,
            payload: comments
        })
        );
};

export const createComment = (commentData) => dispatch => {

    fetch('http://localhost:3000/api/v1/notes', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(commentData)
    })
        .then(res => res.json())
        .then(comment => dispatch({
            type: NEW_COMMENTS,
            payload: comment
        }));
};


