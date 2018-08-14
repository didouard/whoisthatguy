import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Typeahead} from 'react-bootstrap-typeahead'; // ES2015

class App extends Component {
    state = {
	multiple: false,
    };
    
    render() {
	const {multiple} = this.state;
	const {options} = {};
	
	return (
	    <div className="App">
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
	      <React.Fragment>
		<Typeahead
		   labelKey="name"
		   multiple={multiple}
		   options={[
		   {id: 1, name: 'John'},
		   {id: 2, name: 'Miles'},
		   {id: 3, name: 'Charles'},
		   {id: 4, name: 'Herbie'}
		   ]}
		   placeholder="Choose a state..."
		   />
	
		      </React.Fragment>
	    </div>

	);
    }
}

export default App;
