import React from 'react';

const JobCardSkeleton = () => {
  return (
    <div className="card p-3 rounded-4 shadow-sm" style={{ width: '18rem' }}>
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="placeholder-glow">
          <div className="rounded-circle bg-secondary placeholder" style={{ width: '40px', height: '40px' }}></div>
        </div>
        <div className="placeholder-glow">
          <span className="placeholder col-4 rounded-pill"></span>
        </div>
      </div>

      {/* Title */}
      <div className="placeholder-glow mb-2">
        <span className="placeholder col-8 rounded"></span>
      </div>

      {/* Meta info */}
      <div className="d-flex gap-3 mb-2">
        <span className="placeholder col-3 rounded"></span>
        <span className="placeholder col-3 rounded"></span>
        <span className="placeholder col-3 rounded"></span>
      </div>

      {/* Description */}
      <div className="placeholder-glow">
        <span className="placeholder col-10 mb-1"></span>
        <span className="placeholder col-9 mb-1"></span>
        <span className="placeholder col-8 mb-1"></span>
      </div>

      {/* Button */}
      <div className="mt-3">
        <span className="placeholder btn btn-primary w-100 rounded-pill disabled"></span>
      </div>
    </div>
  );
};

export default JobCardSkeleton;
