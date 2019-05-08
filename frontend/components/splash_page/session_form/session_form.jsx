import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		// this.state = this.props.user;
		this.state = {
			email: '',
			username: '',
			password: ''
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}



	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		const user = Object.assign({}, this.state);
		this.props.processForm(user).then( () => this.props.history.push("/posts"));
	}

	loginDemo() {
		// dispatch login with that user's info; create a particular user in seed solely for demo use;
	}
 
	renderErrors() {
		return (
			<ul>
				{this.props.errors.map((error, i) => (
					<li key={`error-${i}`}>
						{error}
					</li>
				))}
			</ul>
		);
	}

	render() {
		let username;
		if (this.props.formType === 'Sign Up') {
			username = <label>
				{/* Username: */}
				<input type="text"
					placeholder="Username"
					value={this.state.username}
					onChange={this.update('username')}
					className="login-input"
				/>
				<br></br>
			</label>
		};

		//button sign in demo (onClick, callback)
		return (
			<div className="login-form-container">
				
				<div className="sessionOptButtons">
					{/* Please {this.props.formType} or  */}
					{this.props.navLink}
				</div>

				<form onSubmit={this.handleSubmit} className="login-form-box">
          <br />
					<div className="login-form">
						<h1 className="splash-header">tumblr</h1>
						<br />
						<label>
							{/* Email: */}
							<input type="text"
								placeholder="Email"
								value={this.state.email}
								onChange={this.update('email')}
								className="login-input"
							/>
						</label>
						<br />
						{ username }
						<label>
							{/* Password: */}
							<input type="password"
								placeholder="Password"
								value={this.state.password}
								onChange={this.update('password')}
								className="login-input"
							/>
						</label>
						<br />


						<div className="renderErrors">
							{this.renderErrors()}
						</div>


						<input className="session-submit" type="submit" value={this.props.formType} />
					</div>
				</form>
			</div>
		);
	}
}

export default withRouter(SessionForm);
