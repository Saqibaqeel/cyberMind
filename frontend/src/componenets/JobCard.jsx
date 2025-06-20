import React, { useEffect } from 'react';
import useJob from '../store/useJob';
import JobCardSkeleton from '../pages/JobCardSkeleton';

const JobCard = () => {
  const { jobs, isLoading, isError, fetchJobs } = useJob();
  console.log('Jobs:', jobs);

  useEffect(() => {
    fetchJobs();
  }, [fetchJobs]);
  console.log('Jobs:', jobs);

  if (isLoading) {
    return (
      <div className="d-flex flex-wrap gap-4">
       
          <JobCardSkeleton/>
        
      </div>
    );
  }

  if (isError) {
    return <p className="text-danger">Error loading jobs. Please try again later.</p>;
  }

  return (
    <div className="d-flex flex-wrap gap-4 justify-content-center mt-5">
      {jobs.map((job) => (
        <div
          key={job._id}
          className="card shadow-sm rounded-4 p-3"
          style={{ width: '18rem', border: 'none' }}
        >
          {/* Logo and Badge */}
          <div className="d-flex justify-content-between align-items-center mb-3">
            <img
              src={job.imageUrl || 'https://via.placeholder.com/40'}
              alt="Company Logo"
              style={{ width: '40px', height: '40px' }}
            />
            <span className="badge text-bg-light text-primary fw-semibold">24h Ago</span>
          </div>

          {/* Title */}
          <h5 className="fw-semibold">{job.jobTitle}</h5>

          {/* Meta Info */}
          <div className="d-flex flex-wrap text-muted my-2 gap-3">
            <span>&#128101; 1–3 yr Exp</span>
            <span>&#128205; {job.location}</span>
            <span>&#128230; ₹{job.salaryRange?.min / 1000}k–₹{job.salaryRange?.max / 1000}k</span>
          </div>

          {/* Description */}
          <ul className="text-muted small ps-3 mb-3">
            <li>{job.jobDescription?.slice(0, 60)}...</li>
          </ul>

          {/* Apply Button */}
          <button className="btn btn-primary w-100 rounded-pill">Apply Now</button>
        </div>
      ))}
    </div>
  );
};

export default JobCard;
