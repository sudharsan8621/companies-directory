import React, { useState, useMemo, useEffect } from 'react';
import './styles/App.css';
import { useCompanies } from './hooks/useCompanies';
import { mockCompanies } from './data/mockData';
import Loader from './components/Loader';
import FilterControls from './components/FilterControls';
import CompanyTable from './components/CompanyTable';
import CompanyCard from './components/CompanyCard';
import ViewToggle from './components/ViewToggle';
import Pagination from './components/Pagination';
import Footer from './components/Footer'; 

function App() {
  const {
    companies,
    loading,
    error,
    filters,
    sortBy,
    sortOrder,
    updateFilters,
    updateSort,
    refresh
  } = useCompanies();

  const [view, setView] = useState('table');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Calculate paginated companies
  const paginatedCompanies = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return companies.slice(startIndex, endIndex);
  }, [companies, currentPage]);

  const totalPages = Math.ceil(companies.length / itemsPerPage);

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

  if (loading) return <Loader />;

  return (
    <div className="App">
      <header className="app-header">
        <h1>Companies Directory</h1>
        <p>Explore and filter companies from various industries</p>
      </header>

      <main className="app-main">
        {error && (
          <div className="error-message">
            <p>{error}</p>
            <button onClick={refresh}>Retry</button>
          </div>
        )}

        <FilterControls 
          filters={filters}
          updateFilters={updateFilters}
          companies={mockCompanies} // Pass all companies for industry filter
        />

        <div className="controls-bar">
          <div className="results-count">
            Found {companies.length} companies
          </div>
          <ViewToggle view={view} setView={setView} />
        </div>

        {companies.length === 0 ? (
          <div className="no-results">
            <p>No companies found matching your criteria</p>
          </div>
        ) : (
          <>
            {view === 'table' ? (
              <CompanyTable
                companies={paginatedCompanies}
                sortBy={sortBy}
                sortOrder={sortOrder}
                updateSort={updateSort}
              />
            ) : (
              <div className="cards-grid">
                {paginatedCompanies.map(company => (
                  <CompanyCard key={company.id} company={company} />
                ))}
              </div>
            )}

            {totalPages > 1 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            )}
          </>
        )}
      </main>

      {/* <footer className="app-footer">
        <p>© 2024 Companies Directory. All rights reserved.</p>
      </footer> */}
       <Footer />
    </div>
  );
}

export default App;