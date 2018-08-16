import React, { Component } from 'react';
import {Typeahead} from 'react-bootstrap-typeahead'; // ES2015
import {NavLink} from "react-router-dom";

var sprops = {};

class Search extends Component {
    
    
    constructor(props) {
	super(props);

	sprops = props;
	
	this.state = {
	    users: []
	    , isLoading: true
	};
    }

    componentDidMount() {
	fetch('http://192.168.113.42:8080/users')
	    .then(response => response.json())
	    .then(data => this.setState({ users: data.users, isLoading: false }));
    }

    typeAheadOnChange(e) {
	if (e.length > 0) {
	    console.log(e[0].firstname + " " + e[0].lastname);
	    sprops.history.push('/user/'+e[0].id);
	}
    }
    
    render() {
	const {users, isLoading} = this.state;
		
	if (isLoading === true) return (<div>Loading... </div>);

	return (
	    <div className="container">
	      <div className="row">
		<div className="col-sm"></div>
		<div className="col-7">
		  <Typeahead
		     labelKey={option => `${option.firstname} ${option.lastname}`}
		     options={users}
		     placeholder="Find someone ?"
		     onChange={this.typeAheadOnChange}
		     />
		</div>
		<div className="col-sm">
		  <NavLink to="/user"> Add user</NavLink>
		</div>
	      </div>
	    </div>	
	);
    }
}

export default Search;
