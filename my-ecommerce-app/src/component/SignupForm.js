import React, { useState } from "react";

const SignupForm = ({ handleSwitchToLogin }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
  });
  const [error, setError] = useState("");
  const [signupSuccess, setSignupSuccess] = useState(false); // New state variable

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    if (name === 'username') {
      fetch(`http://localhost:5000/checkUsername/${value}`)
        .then(response => response.json())
        .then(data => {
          if (data.usernameExists) {
            setError('Username already exists');
          } else {
            setError('');
          }
        });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
    } else {
      setError("");
      // Proceed with signup logic
      fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        if (data.message === 'Username already exists') {
          setError(data.message);
        } else {
          setSignupSuccess(true);
          console.log(data)
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        setError("Username already exists");
      });
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
        {error ? <p style={{ color: "red" }}>{error}</p> : null}
        {signupSuccess ? <p style={{ color: "red" }}>Signup Successful</p> : null}
        <button type="submit">Signup</button>
      </form>
      <button onClick={handleSwitchToLogin}>Switch to Login</button>
    </section>
  );
};

export default SignupForm;
