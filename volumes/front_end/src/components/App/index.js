import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from '../Home';
import Register from '../Register';
import Login from '../Login';
import Navbar from '../Navbar';
import Profile from '../Profile';

class App extends Component{
	render(){
		return(
			<Router>
				<div>
					<Navbar />

					<hr />
					
					<Route exact path='/' component={Home} />
					<Route exact path='/register' component={Register} />
					<Route exact path='/login' component={Login} />
					<Route exact path='/profile' component={Profile} />
				</div>
			</Router>
		)
	}
}

export default App;