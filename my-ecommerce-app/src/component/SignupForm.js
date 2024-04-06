import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignupForm = () => {
	const [formData, setFormData] = useState({
		username: "",
		password: "",
		confirmPassword: "",
		email: "",
	});
	const [error, setError] = useState("");

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevFormData) => ({
			...prevFormData,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (formData.password !== formData.confirmPassword) {
			setError("Passwords do not match");
		} else {
			setError("");
			// Proceed with signup logic
			console.log("Form submitted");
		}
	};

	return (
		<section>
			<h2>Signup</h2>
			<form onSubmit={handleSubmit}>
				<label>
					Username:
					<input
						type="text"
						name="username"
						value={formData.username}
						onChange={handleChange}
						placeholder="Enter your username"
						required
					/>
				</label>
				<br />
				<label>
					Password:
					<input
						type="password"
						name="password"
						value={formData.password}
						onChange={handleChange}
						placeholder="Enter your password"
						required
					/>
				</label>
				<br />
				<label>
					Confirm Password:
					<input
						type="password"
						name="confirmPassword"
						value={formData.confirmPassword}
						onChange={handleChange}
						placeholder="Confirm your password"
						required
					/>
				</label>
				<br />
				<label>
					Email:
					<input
						type="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						placeholder="Enter your email"
						required
					/>
				</label>
				<br />
				{error && <p style={{ color: "red" }}>{error}</p>}
				<button type="submit">Signup</button>
			</form>
			<button>Switch to Login</button>
		</section>
	);
};

export default SignupForm;
