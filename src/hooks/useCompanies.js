import { useState, useEffect } from 'react';
import { companiesAPI } from '../services/api';

export const useCompanies = () => {
  const [companies, setCompanies] = useState([]);
  const [filteredCompanies, setFilteredCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    search: '',
    industry: '',
    location: ''
  });
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    fetchCompanies();
  }, []);

  useEffect(() => {
    applyFiltersAndSort();
  }, [companies, filters, sortBy, sortOrder]);

  const fetchCompanies = async () => {
    try {
      setLoading(true);
      const response = await companiesAPI.getAll();
      setCompanies(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to load companies. Please try again.');
      console.error('Error fetching companies:', err);
    } finally {
      setLoading(false);
    }
  };

  const applyFiltersAndSort = () => {
    let filtered = [...companies];

    // Apply search filter
    if (filters.search) {
      filtered = filtered.filter(company =>
        company.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        company.description.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    // Apply industry filter
    if (filters.industry) {
      filtered = filtered.filter(company =>
        company.industry === filters.industry
      );
    }

    // Apply location filter
    if (filters.location) {
      filtered = filtered.filter(company =>
        company.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }

    // Apply sorting
    filtered.sort((a, b) => {
      let aValue = a[sortBy];
      let bValue = b[sortBy];

      if (typeof aValue === 'string') {
        aValue = aValue.toLowerCase();
        bValue = bValue.toLowerCase();
      }

      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

    setFilteredCompanies(filtered);
  };

  const updateFilters = (newFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  const updateSort = (field) => {
    if (sortBy === field) {
      setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortOrder('asc');
    }
  };

  return {
    companies: filteredCompanies,
    loading,
    error,
    filters,
    sortBy,
    sortOrder,
    updateFilters,
    updateSort,
    refresh: fetchCompanies
  };
};