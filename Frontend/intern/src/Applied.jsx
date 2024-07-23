import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Applied = () => {
  const [appliedInternships, setAppliedInternships] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAppliedInternships = async () => {
      try {
        const response = await fetch('http://localhost:3001/applied', {
          method: 'GET',
          credentials: 'include', // Ensure cookies are included
        });

        if (response.ok) {
          const data = await response.json();
          setAppliedInternships(data);
        } else {
          console.error('Failed to fetch applied internships');
          navigate('/login');
        }
      } catch (error) {
        console.error('Error fetching applied internships:', error);
        navigate('/login');
      }
    };

    fetchAppliedInternships();
  }, [navigate]);

  return (
    <div className="applied-page">
      <header className="applied-header">
        <h1 className="header-title">Applied Internships</h1>
        <p className="header-subtitle">Here is a list of internships you have applied to.</p>
      </header>
      
      <main className="main-content">
        <section className="internships-section">
          <div className="internships-cards">
            {appliedInternships.length > 0 ? (
              appliedInternships.map((internship, index) => (
                <div key={index} className="internship-card">
                  <h3 className="card-company">{internship.company || 'N/A'}</h3>
                  <h4 className="card-role">{internship.role || 'N/A'}</h4>
                  <p><strong>Office Location:</strong> {internship.location?.office || 'N/A'}</p>
                  <p><strong>Stipend:</strong> {internship.location?.stipend || 'N/A'}</p>
                </div>
              ))
            ) : (
              <p className="loading-text">No internships applied yet.</p>
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

export default Applied;
