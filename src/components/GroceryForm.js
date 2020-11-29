import React, { Component } from 'react'

class GroceryForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
           item: '',
           qty: '',
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

        const grocery = {
            item: this.state.item,
            qty: this.state.qty,
        }
        fetch('http://localhost:3000/api/v1/groceries', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(grocery)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }

    render() {
        return (
            <div>
                <h1>Add Groceries</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Item:</label>
                        <br/>
                        <input type="text" name="item" onChange={this.onChange} value={this.state.item}/>
                    </div>
                    <div>
                        <label>Qty:</label>
                        <br />
                        <input type="text" name="qty" onChange={this.onChange} value={this.state.qty}/>
                        <br/>
                        <button type="submit">Submit</button>
                    </div>
                    <div>
       
                        <input type="text" name="user_id" onChange={this.onChange} value={this.state.user_id} />
                    </div>
                </form>
            </div>
        )
    }
}

export default GroceryForm;
