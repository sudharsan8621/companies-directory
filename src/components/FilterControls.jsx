import React from 'react';
import '../styles/FilterControls.css';

const FilterControls = ({ filters, updateFilters, companies }) => {
  // Get unique industries from all companies (not filtered)
  const allCompanies = companies.length > 0 ? companies : [];
  const industries = [...new Set(allCompanies.map(c => c.industry))].filter(Boolean);
  
  return (
    <div className="filter-controls">
      <div className="filter-group">
        <label htmlFor="search">Search</label>
        <input
          id="search"
          type="text"
          placeholder="Search companies..."
          value={filters.search}
          onChange={(e) => updateFilters({ search: e.target.value })}
        />
      </div>

      <div className="filter-group">
        <label htmlFor="industry">Industry</label>
        <select
          id="industry"
          value={filters.industry}
          onChange={(e) => updateFilters({ industry: e.target.value })}
        >
          <option value="">All Industries</option>
          {industries.map(industry => (
            <option key={industry} value={industry}>
              {industry}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="location">Location</label>
        <input
          id="location"
          type="text"
          placeholder="Filter by location..."
          value={filters.location}
          onChange={(e) => updateFilters({ location: e.target.value })}
        />
      </div>

      <button 
        className="clear-filters"
        onClick={() => updateFilters({ search: '', industry: '', location: '' })}
      >
        Clear Filters
      </button>
    </div>
  );
};

export default FilterControls;