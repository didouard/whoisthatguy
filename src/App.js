import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import {Typeahead} from 'react-bootstrap-typeahead'; // ES2015

class App extends Component {
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
		
	if (isLoading == true) return (<div>Loading... </div>);

	return ( 
		<div className="App">
		<div>{this.test} hello</div>
		<header className="App-header">
		<img src={logo} className="App-logo" alt="logo" />
		<h1 className="App-title">Welcome to React</h1>
            </header>
		<p className="App-intro">
	    To get started, edit <code>src/App.js</code> and save to reload.
            </p>
	    
		<div class="container">
		<div class="row">
		<div class="col-sm">
	    One of three columns
	    </div>
		<div class="col-sm">
	    One of three columns
	    </div>
		<div class="col-sm">
	    One of three columns
	    </div>
	    </div>
	    </div>
		<Fragment>
		<Typeahead
	    labelKey="name"
	    options={users}
	    
	    placeholder="Choose a state..."
		/>
	    
	    </Fragment>
	    </div>

	);
    }
}

export default App;
