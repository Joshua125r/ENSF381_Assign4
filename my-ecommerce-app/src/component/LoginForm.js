import React from "react";
import { Link } from "react-router-dom";

const LoginForm = ({ handleSwitchToSignup }) => {
	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<section>
			<h2>Login</h2>
			<form onSubmit={handleSubmit}>
				<label>
					Username:
					<input
						type="text"
						id="username"
						name="username"
						placeholder="Enter your username"
						required
					/>
				</label>
				<br />
				<label>
					Password:
					<input
						type="password"
						id="password"
						name="password"
						placeholder="Enter your password"
						required
					/>
				</label>
				<br />
				<button type="submit">Login</button>
			</form>
			<br />
			<button onClick={handleSwitchToSignup}>Switch to Signup</button>
		</section>
	);
};

export default LoginForm;
