import React from 'react';
import '../styles/CompanyTable.css';

const CompanyTable = ({ companies, sortBy, sortOrder, updateSort }) => {
  const getSortIcon = (field) => {
    if (sortBy !== field) return '↕';
    return sortOrder === 'asc' ? '↑' : '↓';
  };

  return (
    <div className="table-container">
      <table className="company-table">
        <thead>
          <tr>
            <th onClick={() => updateSort('name')}>
              Name {getSortIcon('name')}
            </th>
            <th onClick={() => updateSort('industry')}>
              Industry {getSortIcon('industry')}
            </th>
            <th onClick={() => updateSort('location')}>
              Location {getSortIcon('location')}
            </th>
            <th onClick={() => updateSort('employees')}>
              Employees {getSortIcon('employees')}
            </th>
            <th onClick={() => updateSort('founded')}>
              Founded {getSortIcon('founded')}
            </th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {companies.length > 0 ? (
            companies.map(company => (
              <tr key={company.id}>
                <td>{company.name}</td>
                <td>
                  <span className="industry-badge">{company.industry}</span>
                </td>
                <td>{company.location}</td>
                <td>{company.employees}</td>
                <td>{company.founded}</td>
                <td>
                  <a href={`https://${company.website}`} target="_blank" rel="noopener noreferrer">
                    {company.website}
                  </a>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" style={{ textAlign: 'center', padding: '20px' }}>
                No companies to display
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CompanyTable;