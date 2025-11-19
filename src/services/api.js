import { mockCompanies } from '../data/mockData';

// Simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const companiesAPI = {
  getAll: async () => {
    await delay(1000); // Simulate network delay
    return { data: mockCompanies };
  },
  
  getById: async (id) => {
    await delay(500);
    const company = mockCompanies.find(c => c.id === parseInt(id));
    if (!company) throw new Error('Company not found');
    return { data: company };
  }
};