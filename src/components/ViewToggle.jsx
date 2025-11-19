import React from 'react';
import '../styles/ViewToggle.css';

const ViewToggle = ({ view, setView }) => {
  return (
    <div className="view-toggle">
      <button
        className={view === 'table' ? 'active' : ''}
        onClick={() => setView('table')}
      >
        Table View
      </button>
      <button
        className={view === 'card' ? 'active' : ''}
        onClick={() => setView('card')}
      >
        Card View
      </button>
    </div>
  );
};

export default ViewToggle;