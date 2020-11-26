import React, { Component } from 'react'



class Commentform extends Component {
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
        }

        fetch('http://localhost:3000/api/v1/notes', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(comments)
        })
        .then(res => res.json())
        .then(data => console.log(data));
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

export default Commentform;
