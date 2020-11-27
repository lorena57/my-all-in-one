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
