import React from 'react';
import './CareerOpportunity.css';

const CareerOpportunity = () => {
  return (
    <div className="career-opportunity">
      <section className="heroo-section">
        <div className="hero-content">
          <h1>Explore Career Opportunities at Best Infosystems Ltd.</h1>
          <p>Join a leading staffing and recruiting company dedicated to connecting talent with top employers across IT, Telecom, Banking, and SCM sectors.</p>
        </div>
      </section>

      <nav className="career-nav">
        <ul>
          <li className="active">Current Openings</li>
          <li>Why Choose Us</li>
          <li>Benefits & Growth</li>
          <li>How to Apply</li>
        </ul>
      </nav>

      <section className="career-info">
        <div className="info-item">
          <h3>Current Openings</h3>
          <p>Discover diverse roles tailored to your skills and aspirations. We seek passionate professionals eager to make an impact.</p>
        </div>
        <div className="info-item">
          <h3>Why Choose Us</h3>
          <p>At Best Infosystems Ltd., we prioritize employee development, foster innovation, and maintain a supportive work culture.</p>
        </div>
        <div className="info-item">
          <h3>Benefits & Growth</h3>
          <p>Enjoy competitive compensation, comprehensive health benefits, flexible work arrangements, and continuous learning opportunities.</p>
        </div>
        <div className="info-item">
          <h3>How to Apply</h3>
          <p>Our streamlined hiring process ensures transparency and fairness, helping you join our team with ease and confidence.</p>
        </div>
      </section>
    </div>
  );
};

export default CareerOpportunity;
