import React from 'react';
import useJob from '../store/useJob';

const JobFilter = () => {
  const {
    setFilter,
    clearFilters,
    filters,
    scheduleApply
  } = useJob();

  // Convert salary value to thousands for display
  const maxSalaryK = Math.floor(filters.maxSalary / 1000);

  // Handle salary slider change
  const onSalaryChange = (e) => {
    const value = Number(e.target.value) * 1000;
    setFilter('maxSalary', value);
  };

  // Check if any filter is active
  const isFilterActive = 
    filters.location || 
    filters.jobType || 
    filters.title || 
    filters.maxSalary !== 80000;

  return (
    <div
      className="d-flex align-items-center justify-content-between bg-white shadow-sm rounded-pill px-4 py-3 mx-auto mt-4 flex-wrap"
      style={{ maxWidth: '1200px', gap: '1rem' }}
    >
      {/* 🔍 Title Search */}
      <div className="d-flex align-items-center gap-2">
        <i className="bi bi-search" style={{ fontSize: '1.2rem' }}></i>
        <input
          type="text"
          className="form-control border-0"
          placeholder="Search By Job Title, Role"
          style={{ width: '180px' }}
          value={filters.title}
          onChange={(e) => {
            setFilter('title', e.target.value);
            scheduleApply();
          }}
        />
      </div>

      <div className="vr d-none d-md-block" />

      <div className="d-flex align-items-center gap-2">
        <i className="bi bi-geo-alt"></i>
        <select
          className="form-select border-0"
          style={{ width: '150px' }}
          value={filters.location}
          onChange={(e) => setFilter('location', e.target.value)}
        >
          <option value="">Preferred Location</option>
          <option value="Hyderabad">Hyderabad</option>
          <option value="Remote">Remote</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Delhi">Delhi</option>
        </select>
      </div>

      <div className="vr d-none d-md-block" />

 
      <div className="d-flex align-items-center gap-2">
        <i className="bi bi-person"></i>
        <select
          className="form-select border-0"
          style={{ width: '130px' }}
          value={filters.jobType}
          onChange={(e) => setFilter('jobType', e.target.value)}
        >
          <option value="">Job type</option>
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
          <option value="Internship">Internship</option>
          <option value="Contract">Contract</option>
        </select>
      </div>

      <div className="vr d-none d-md-block" />


      <div className="d-flex align-items-center gap-3">
        <div className="text-nowrap">
          <div className="text-muted small">Max Salary Per Month</div>
          <div className="fw-semibold">
            Up to ₹{maxSalaryK}k
          </div>
        </div>
        <input
          type="range"
          min="0"
          max="200"
          value={maxSalaryK}
          onChange={onSalaryChange}
          className="form-range"
          style={{ width: '120px' }}
        />
      </div>

   
      {isFilterActive && (
        <button
          className="btn btn-link text-danger fw-semibold"
          style={{ textDecoration: 'none' }}
          onClick={clearFilters}
        >
          Clear All
        </button>
      )}
    </div>
  );
};

export default JobFilter;