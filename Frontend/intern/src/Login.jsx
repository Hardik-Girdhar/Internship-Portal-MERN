import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const credentials = { email, password };
    try {
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', 
        body: JSON.stringify(credentials),
      });
      const data = await response.json();
      if (response.ok) { 
        setMessage("Login successful");
        navigate('/home');
      } else {
        setMessage(data.message || "Invalid Credentials");
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="container-fluid">
      <div className="login-page">
        <div className="login-container">
          <h2 className="login-title">Login to Your Account</h2>
          <p className="login-description">Please enter your credentials to access the application. If you don’t have an account, please sign up.</p>
          {message && <p className="login-error">{message}</p>}
          <form className="login-form" onSubmit={handleLogin}>
            <div className="login-input-group">
              <i className="fas fa-user login-icon"></i>
              <input 
                type="email" 
                placeholder="Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                className="login-input"
                required
              />
            </div>
            <div className="login-input-group">
              <i className="fas fa-lock login-icon"></i>
              <input 
                type="password" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                className="login-input"
                required
              />
            </div>
            <button type="submit" className="login-btn">
              <i className="fas fa-sign-in-alt"></i> Login
            </button>
          </form>
          <p className="login-footer">
            Don't have an account? <Link to="/register">Sign up here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
