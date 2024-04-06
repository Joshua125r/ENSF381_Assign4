import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ handleSwitchToSignup }) => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		fetch('http://localhost:5000/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ username, password }),
		})
		.then(response => response.json())
		.then(data => {
			if (data.message === 'Invalid username or password') {
				setError(data.message);
			} else {
				console.log(data);
				navigate('/products');  // Redirect to the Product page
			}
		})
		.catch((error) => {
			console.error('Error:', error);
		});
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
						value={username}
						onChange={e => setUsername(e.target.value)}
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
						value={password}
						onChange={e => setPassword(e.target.value)}
						placeholder="Enter your password"
						required
					/>
				</label>
				<br />
				{error && <p style={{ color: "red" }}>{error}</p>}
				<button type="submit">Login</button>
			</form>
			<br />
			<button onClick={handleSwitchToSignup}>Switch to Signup</button>
		</section>
	);
};

export default LoginForm;
