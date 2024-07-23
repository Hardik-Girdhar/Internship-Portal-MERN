import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import res from './Opp.json';

const Home = () => {
  const [internships, setInternships] = useState([]);
  const [disabledButtons, setDisabledButtons] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setInternships(res.Internships || []);
  }, []);

  const apply = async (internship, index) => {
    try {
      const response = await fetch('http://localhost:3001/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ opp: internship }),
      });

      if (response.ok) {
        console.log('Applied successfully');
        setDisabledButtons((prev) => [...prev, index]);
        const responseData = await response.json();
        console.log(responseData);
      } else {
        console.error('Application failed');
        const errorData = await response.json();
        console.error(errorData);
        navigate('/login');  // Redirect to login on failure
      }
    } catch (error) {
      console.error('Error applying:', error);
    }
  };

  return (
    <div className="home-page">
      <header className="home-header">
       
      </header>

      <main className="main-content">
        <section className="internships-section">
          <div className="internships-cards">
            {internships.length > 0 ? (
              internships.map((internship, index) => (
                <div key={index} className="internship-card">
                  <h3 className="card-company">{internship.Company || 'N/A'}</h3>
                  <h4 className="card-role">{internship.Role || 'N/A'}</h4>
                  <p><strong>Office Location:</strong> {internship.Location?.Office || 'N/A'}</p>
                  <p><strong>Stipend:</strong> {internship.Location?.Stipend || 'N/A'}</p>
                  <p><strong>Internship Location:</strong> {internship.Internship?.Location || 'N/A'}</p>
                  <p><strong>Duration:</strong> {internship.Internship?.Duration || 'N/A'}</p>
                  <p><strong>Start Date:</strong> {internship.Internship?.StartDate || 'N/A'}</p>
                  <button
                    className="apply-button"
                    onClick={() => apply(internship, index)}
                    disabled={disabledButtons.includes(index)}
                  >
                    Apply
                  </button>
                </div>
              ))
            ) : (
              <p className="loading-text">Loading internships...</p>
            )}
          </div>
        </section>
      </main>

      <footer className="home-footer">
        <p className="footer-text">&copy; 2024 Internship Portal. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
