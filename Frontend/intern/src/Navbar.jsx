import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch('http://localhost:3001/profile', {
          method: 'GET',
          credentials: 'include',
        });
        if (response.ok) {
          const data = await response.json();
          setUser(data);
          console.log(data);
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error('Fetch user error:', error);
        setUser(null);
      }
    };

    fetchUser();
  }, []);

  const handleLogout = async () => {
    try {
      const response = await fetch('http://localhost:3001/logout', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        localStorage.removeItem('token');
        setUser(null);
        navigate('/login');
      } else {
        console.error('Logout failed');
      }
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link className="navbar-brand" to="/">Internship Portal</Link>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link className="navbar-link" to="/home">Home</Link>
          </li>
          <li className="navbar-item">
            <Link className="navbar-link" to="/applied">Applied Internships</Link>
          </li>
         
          
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
