import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Search from "./Search";
import User from "./User";

class App extends Component {

    render() {
	return (
	    <HashRouter>
	      <div className="App">
		<div>{this.test} hello</div>
		<header className="App-header">
		  <img src={logo} className="App-logo" alt="logo" />
		  <h1 className="App-title">Whois This Guys Again ?</h1>
		  <ul className="header">
		    <li><NavLink to="/">Search</NavLink></li>
		    <li><NavLink to="/user">User</NavLink></li>
		  </ul>
		</header>
		<div className="content">
		  <Route path="/" component={Search}/>
		  <Route path="/search" component={Search}/>
		  <Route path="/user" component={User}/>
		</div>
	      </div>
	    </HashRouter>
		
	);
    }
}

export default App;
