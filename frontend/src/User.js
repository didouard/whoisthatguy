import React, { Component } from 'react';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {user: {}};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
	const target = event.target;
	const value = target.type === 'checkbox' ? target.checked : target.value;
	const name = target.name;

	this.setState({
	    [name]: value
	});
    }
    
    /*handleChange(event) {
	console.log(event.target.value);
	var target = event.target;
	
        this.setState((prevState) => {
	    // Important: read `prevState` instead of `this.state` when updating.
	    prevState.user[target.name] = target.value;
	    
	    return {prevState};
	});
    }*/

    handleSubmit(event) {
        alert('A name was submitted: '
	      + this.state.firstname
	      + " "
	      + this.state.lastname);
        event.preventDefault();

	var user = {firstname: this.state.firstname
		    , lastname: this.state.lastname}; 
	
	fetch('http://192.168.113.42:8080/users', {
	    method: 'POST',
	    headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
	    },
	    body: JSON.stringify(user)
	});
    }

    render() {
        return (
	    <form onSubmit={this.handleSubmit}>
	      <label>
	        Firstname:
	        <input type="text"
		       name="firstname"
		       value={this.state.user.fistname}
		       onChange={this.handleChange} />
	      </label>
	      <label>
	        Lastname:
	        <input type="text"
		       name="lastname"
		       value={this.state.user.lastname}
		       onChange={this.handleChange} />
	      </label>
	      <input type="submit" value="Submit" />
	    </form>
	);
    }
}

export default User;
