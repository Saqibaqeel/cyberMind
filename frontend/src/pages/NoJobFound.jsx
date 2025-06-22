import React from 'react';

const NoJobFound = ({ clearFilters }) => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center min-vh-50 p-4">
      <div className="bg-white rounded-4 shadow p-4 p-md-5 text-center" style={{ maxWidth: '700px' }}>
        {/* Icon Section */}
        <div className="bg-light rounded-circle d-inline-flex align-items-center justify-content-center p-4 mb-4">
          <i className="fas fa-search fa-3x text-primary"></i>
        </div>
        
        {/* Title */}
        <h2 className="fw-bold mb-3">
          <i className="fas fa-exclamation-circle me-2 text-warning"></i>
          No Jobs Found
        </h2>
        
        {/* Description */}
        <p className="lead text-muted mb-4">
          We couldn't find any jobs matching your criteria. Try adjusting your filters or search terms.
        </p>
        
        {/* Suggestions */}
        <div className="bg-light rounded-3 p-4 mb-4 text-start">
          <h5 className="fw-semibold mb-3">
            <i className="fas fa-lightbulb me-2 text-info"></i>
            Suggestions:
          </h5>
          <ul className="list-unstyled mb-0">
            <li className="mb-2">
              <i className="fas fa-arrow-right me-2 text-success"></i>
              Broaden your search terms
            </li>
            <li className="mb-2">
              <i className="fas fa-arrow-right me-2 text-success"></i>
              Adjust your salary expectations
            </li>
            <li className="mb-2">
              <i className="fas fa-arrow-right me-2 text-success"></i>
              Try different locations or job types
            </li>
            <li>
              <i className="fas fa-arrow-right me-2 text-success"></i>
              Check for typos in your search
            </li>
          </ul>
        </div>
        
        {/* Action Buttons */}
        <div className="d-flex flex-column flex-md-row justify-content-center gap-3">
          <button 
            className="btn btn-primary px-4 py-2 fw-semibold"
            onClick={clearFilters}
          >
            <i className="fas fa-filter me-2"></i>
            Clear All Filters
          </button>
         
        
        </div>
      </div>
    </div>
  );
};

export default NoJobFound;