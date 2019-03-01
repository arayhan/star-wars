import React, { Component } from 'react';
import Routes from '../Routes/Routes';
import './App.css';
import 'whatwg-fetch';

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="App">
					<header className="app-header">
						<h1>Star Wars Series</h1>
					</header>
					<Routes />
				</div>
			</div>
		);
	}
}

export default App;
