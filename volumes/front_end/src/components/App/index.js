import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from '../Home';
import SignUp from '../SignUp';
import Header from '../Header';

class App extends Component{
	render(){
		return(
			<Router>
				<div>
					<Header />

					<hr />
					
					<Route exact path='/' component={Home} />
					<Route path='/sign-up' component={SignUp} />
				</div>
			</Router>
		)
	}
}

export default App;