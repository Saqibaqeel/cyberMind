import React, { useEffect } from 'react';
import useJob from '../store/useJob';
import SkeletonJobCard from '../pages/SkeletonJobCard';
import NoJobsFound from '../pages/NoJobFound';

const JobCard = () => {
  const { jobs, fetchJobs, isLoading, isError } = useJob();

  useEffect(() => {
    fetchJobs();
  }, [fetchJobs]);

  if (isLoading) {
      return (
      <div className="d-flex flex-wrap justify-content-center">
        {Array.from({ length: 4 }).map((_, index) => (
          <SkeletonJobCard key={index} />
        ))}
      </div>
    );
  };
  if (isError) return <p>Error fetching jobs</p>;
  if (jobs.length === 0) return <NoJobsFound />;

  return (
    <div className="d-flex flex-wrap gap-4 justify-content-center mt-5">
      {jobs.map((job) => (
        <div
          key={job._id}
          className="job-card shadow-sm p-3"
          style={{
            width: '316px',
            height: '360px',
            backgroundColor: '#fff',
            borderRadius: '16px',
            boxShadow: '0px 0px 14px rgba(211, 211, 211, 0.15)',
            fontFamily: 'Inter, sans-serif',
            color: 'rgba(0, 0, 0, 1)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Logo + Badge */}
          <div className="d-flex justify-content-between align-items-start mb-3">
            <img
              src={
                job.imageUrl ||
                'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'
              }
              alt="Company Logo"
              style={{
                width: '72px',
                height: '72px',
                borderRadius: '13px',
                border: '1px solid rgba(255, 255, 255, 1)',
                background: 'linear-gradient(180deg, #FEFEFD 0%, #F1F1F1 100%)',
                boxShadow: '0px 4px 20px rgba(148, 148, 148, 0.5)'
              }}
            />
            <span
              className="badge fw-medium"
              style={{
                fontSize: '13px',
                borderRadius: '12px',
                backgroundColor: 'rgba(176, 217, 255, 1)',
                color: 'rgba(0, 0, 0, 1)',
                padding: '6px 12px'
              }}
            >
              24h Ago
            </span>
          </div>

          {/* Title */}
        <h5
  className="fw-bold text-start mb-3"
  style={{
    fontSize: '20px',
    fontFamily: 'Satoshi Variable, sans-serif',
    paddingLeft: '10px'
  }}
>
  {job.jobTitle}
</h5>

          {/* Meta Info */}
          <div
            className="d-flex flex-wrap gap-3 mb-3"
            style={{
              fontSize: '14px',
              fontFamily: 'Inter, sans-serif',
              color: 'rgba(85, 85, 85, 1)'
            }}
          >
            <span className="d-flex align-items-center gap-1">
              <img src="./Vector.png" alt="Experience Icon" style={{ width: '16px', height: '16px' }} />
              1–3 yr Exp
            </span>
            <span className="d-flex align-items-center gap-1">
              <img src="site.png" alt="Location Icon" style={{ width: '16px', height: '16px' }} />
              {job.location}
            </span>
            <span className="d-flex align-items-center gap-1">
              <img src="./sal.png" alt="Salary Icon" style={{ width: '16px', height: '16px' }} />
              {Math.floor(job.salaryRange.max / 100000)} LPA
            </span>
          </div>

          {/* Description */}
          <ul
            className="text-muted ps-3 mb-3"
            style={{
              fontSize: '14px',
              lineHeight: '1.5',
              fontFamily: 'Satoshi Variable, sans-serif',
              fontWeight: 500,
              color: 'rgba(85, 85, 85, 1)'
            }}
          >
            <li>{job.jobDescription}</li>
            <li>Type: {job.jobType}</li>
          </ul>

          {/* Apply Button */}
          <button
            className="btn fw-semibold"
            style={{
              width: '284px',
              height: '46px',
              backgroundColor: 'rgba(0, 170, 255, 1)',
              color: '#ffffff',
              border: '1px solid rgba(0, 170, 255, 1)',
              borderRadius: '10px',
              boxShadow: '0px 0px 14px rgba(93, 93, 93, 0.15)',
              fontSize: '16px',
              fontFamily: 'Satoshi Variable, sans-serif',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            Apply Now
          </button>
        </div>
      ))}
    </div>
  );
};

export default JobCard;
