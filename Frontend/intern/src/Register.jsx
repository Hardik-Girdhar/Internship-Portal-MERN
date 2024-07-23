import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';


const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const userData = { name, email, password };
    try {
      const response = await fetch('http://localhost:3001/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      const data = await response.json();
      if (response.ok) {
        console.log(data);
        navigate('/login');
      } else {
        console.error('Registration error:', data);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container-fluid">
      <div className="register-page">
        <div className="register-container">
          <h2 className="register-title">Create Your Account</h2>
          <p className="register-description">Please fill in the details to create your account. If you already have an account, you can log in.</p>
          <form className="register-form" onSubmit={handleRegister}>
            <div className="register-input-group">
              <i className="fas fa-user register-icon"></i>
              <input 
                type="text" 
                placeholder="Username" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                className="register-input"
                required
              />
            </div>
            <div className="register-input-group">
              <i className="fas fa-envelope register-icon"></i>
              <input 
                type="email" 
                placeholder="Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                className="register-input"
                required
              />
            </div>
            <div className="register-input-group">
              <i className="fas fa-lock register-icon"></i>
              <input 
                type="password" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                className="register-input"
                required
              />
            </div>
            <button type="submit" className="register-btn">
              <i className="fas fa-user-plus"></i> Register
            </button>
          </form>
          <p className="register-footer">
            Already have an account? <Link to="/login">Sign in here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
