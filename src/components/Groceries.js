import React, { Component } from 'react'

 class Groceries extends Component {

    constructor(props){
        super(props);
        this.state = {
            groceries: [] 
        }
        
    }

    componentWillMount() {
        fetch('http://localhost:3000/api/v1/groceries')
        .then(res => res.json())
            .then(data => this.setState({ groceries: data }));
    }
    
    render() {
        const postGroceries = this.state.groceries.map(grocery => (
            <div key={grocery.id}>
                <p>Buy: {grocery.item}</p>
                <p>Qty: {grocery.qty }</p>
            </div>
        ))
        return (
            <div>
                <h1>Groceries</h1>
                {postGroceries}
            </div>
        )
    }
}

export default Groceries;
