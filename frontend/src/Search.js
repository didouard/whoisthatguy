import React, { Component } from 'react';
import {Typeahead} from 'react-bootstrap-typeahead'; // ES2015
import {Route, NavLink, HashRouter} from "react-router-dom";

class Search extends Component {
    constructor(props) {
	super(props);

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
    
    render() {
	const {users, isLoading} = this.state;
		
	if (isLoading === true) return (<div>Loading... </div>);

	return (
	    <div className="container">
	      <div className="row">
		<div className="col-sm"></div>
		<div className="col-7">
		  <Typeahead
		     labelKey="name"
		     options={users}
		     placeholder="Find someone ?"
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
