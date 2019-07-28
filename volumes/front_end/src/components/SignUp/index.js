import React, { Component } from 'react';

class SignUp extends Component{
	render(){
		return(
			<div>
				<h2>Sign-Up</h2>
				<form>
					<div className="container">
						<h3>Register</h3>
						<p>Please fill in this form to create an account.</p>
						<hr />

						<label htmlFor="email"><strong>Email</strong></label>
						<input type="text" placeholder="Enter Password" name="password" required />

						<label htmlFor="password"><b>Password</b></label>
						<input type="password" placeholder="Enter Password" name="password" required />

						<label htmlFor="password-repeat"><b>Repeat Password</b></label>
						<input type="password" placeholder="Repeat Password" name="password-repeat" required />
						<hr />

						<p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
						<button type="submit" className="registerbtn">Register</button>
					</div>
					<div className="container signin">
						<p>Already have an account? <a href="#">Sign in</a>.</p>
					</div>
				</form>
			</div>
		)
	}
}

export default SignUp;