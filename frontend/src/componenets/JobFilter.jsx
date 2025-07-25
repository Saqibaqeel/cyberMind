import React, { useEffect } from 'react';
import useJob from '../store/useJob';

const JobFilter = () => {
  const { setFilter, filters, scheduleApply } = useJob();

  const maxK = Math.floor(filters.maxSalary / 1000);

  const handleSalary = (e) => {
    const val = Number(e.target.value) * 1000;
    setFilter('maxSalary', val);
    scheduleApply();
  };

  useEffect(() => {
    const range = document.querySelector('.fa-range');
    const pct = (maxK / 200) * 100;
    if (range) range.style.setProperty('--value', `${pct}%`);
  }, [maxK]);

  return (
    <div
      className="job-filter d-flex align-items-center justify-content-between px-4 py-3 bg-white shadow-sm rounded-pill mx-auto mt-4 flex-wrap"
      style={{ minWidth: '100vw', gap: '1rem' }}
    >
      {/* 🔍 Job Title or Role */}
      <div className="d-flex align-items-center gap-2">
        <i className="fas fa-search" />
        <input
          type="text"
          className="form-control border-0"
          placeholder="Search by Job Title, Role or Company"
          value={filters.title}
          onChange={e => {
            setFilter('title', e.target.value);
            scheduleApply();
          }}
        />
      </div>

      <div className="vr d-none d-md-block" />

      {/* 🌍 Location */}
      <div className="d-flex align-items-center gap-2">
        <i className="fas fa-map-marker-alt" />
        <select
          className="form-select border-0"
          value={filters.location}
          onChange={e => {
            setFilter('location', e.target.value);
            scheduleApply();
          }}
        >
          <option value="">Preferred Location</option>
          <option>Hyderabad</option>
          <option>Remote</option>
          <option>Mumbai</option>
          <option>Bangalore</option>
          <option>Delhi</option>
        </select>
      </div>

      <div className="vr d-none d-md-block" />

      {/* 👤 Job Type */}
      <div className="d-flex align-items-center gap-2">
        <i className="fas fa-user" />
        <select
          className="form-select border-0"
          value={filters.jobType}
          onChange={e => {
            setFilter('jobType', e.target.value);
            scheduleApply();
          }}
        >
          <option value="">Job type</option>
          <option>Full-time</option>
          <option>Part-time</option>
          <option>Internship</option>
          <option>Contract</option>
        </select>
      </div>

      <div className="vr d-none d-md-block" />

      {/* 💰 Salary Range */}
<div className="salary-range-container" style={{  }}>
  <label className="range-label" style={{fontFamily:'satoshi variable' ,fontWeight:'600',fontSize:'16px'}}>
    Salary Per Month ₹ <span>50k to 80k</span>
  </label>
  <input
    type="range"
    min="50"
    max="200"
    value={maxK}
    onChange={handleSalary}
    className="fa-range"
    style={{
      accentColor: 'black',
      width: '200px', // Adjust width as needed
      height: '0px',
      border: '2px solid rgba(34, 34, 34, 1)' // Adjust height as needed
    }}
  />
</div>

    </div>
  );
};

export default JobFilter;
