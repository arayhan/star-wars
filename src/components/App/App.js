
/** 
 * Copyright A.Rayhan P 2019 | All right Reserved
*/

import React, { Component } from 'react';
import Routes from '../Routes/Routes';
import { Link } from 'react-router-dom';
import './App.css';
import 'whatwg-fetch';

class App extends Component {
	render() {
		return (
			<div className="App container-x">
				<div className="App">
					<header className="app-header">
						<h1>Star Wars Series</h1>
						<Link to={ '/' } className="btn-second">Home</Link>
						<div className="background"></div>
					</header>
					<Routes />
				</div>
			</div>
		);
	}
}

export default App;
