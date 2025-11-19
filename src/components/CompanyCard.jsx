import React from 'react';
import '../styles/CompanyCard.css';

const CompanyCard = ({ company }) => {
  return (
    <div className="company-card">
      <div className="company-header">
        <h3>{company.name}</h3>
        <span className="industry-badge">{company.industry}</span>
      </div>
      <div className="company-body">
        <p className="description">{company.description}</p>
        <div className="company-details">
          <div className="detail-item">
            <span className="detail-label">Location:</span>
            <span className="detail-value">{company.location}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Employees:</span>
            <span className="detail-value">{company.employees}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Founded:</span>
            <span className="detail-value">{company.founded}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Website:</span>
            <a href={`https://${company.website}`} target="_blank" rel="noopener noreferrer">
              {company.website}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;