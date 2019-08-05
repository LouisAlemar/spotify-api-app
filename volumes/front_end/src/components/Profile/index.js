import React, {Component} from 'react';
import jwt_decode from 'jwt-decode';

class Profile extends Component{
	constructor(){
		super()
		this.state = {
			first_name: '',
			last_name: '',
			email: ''
		}
	}

	componentDidMount(){
		const token = localStorage.usertoken
		const decoded = jwt_decode(token)

		this.setState({
			first_name: decoded.first_name,
			last_name: decoded.last_name,
			email: decoded.email
		})
	}

	render(){
		return(
			<div className="container">
				<h1>PROFILE</h1>
				First Name: {this.state.first_name} <br />
				Last Name: {this.state.last_name} <br />
				Email: {this.state.email} <br />
			</div>
		)
	}
}

export default Profile;