import React from 'react';

import './signin.scss';
import FormInput from '../forminput/FormInput';
import CustomButton from '../custombutton/CustomButton';
import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
	constructor() {
		super();

		this.state = {
			email: '',
			password: ''
		};
	}

	handleSubmit = (e) => {
		e.preventDefault();

		this.setState({ email: '', password: '' });
	};

	handleChange = (e) => {
		const { value, name } = e.target;

		this.setState({ [name]: value });
	};

	render() {
		return (
			<div className="sign-in">
				<h2>I already have an account</h2>
				<span>Sing in with your email and password</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						name="email"
						type="email"
						handleChange={this.handleChange}
						value={this.state.email}
						label="email"
						required
					/>
					<FormInput
						name="password"
						type="password"
						handleChange={this.handleChange}
						value={this.state.password}
						label="password"
						required
					/>

                    <div className='buttons'>
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In with Google</CustomButton>
                    </div>
				</form>
			</div>
		);
	}
}

export default SignIn;