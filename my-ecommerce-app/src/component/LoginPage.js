import React, { useState } from 'react';
import Header from './Header';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import Footer from './Footer';

const LoginPage = () => {
  const [showLoginForm, setShowLoginForm] = useState(true);

  const handleSwitchToSignup = () => {
    setShowLoginForm(false);
  };

  return (
    <div>
      <Header />
      <div>
        {showLoginForm ? <LoginForm handleSwitchToSignup={handleSwitchToSignup} /> : <SignupForm />}
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
