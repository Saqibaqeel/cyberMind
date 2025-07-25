import React, { useState } from 'react';
import { Modal, Form, Row, Col } from 'react-bootstrap';
import useJob from '../store/useJob';
import { toast } from 'react-hot-toast';

const CreateJobModal = ({ show, handleClose }) => {
  const { createJob } = useJob();

  const [jobData, setJobData] = useState({
    jobTitle: '',
    companyName: '',
    location: '',
    jobType: '',
    salaryRange: { min: '', max: '' },
    applicationDeadline: '',
    jobDescription: '',
    imageUrl: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'salaryMin' || name === 'salaryMax') {
      setJobData((prev) => ({
        ...prev,
        salaryRange: {
          ...prev.salaryRange,
          [name === 'salaryMin' ? 'min' : 'max']: Number(value),
        },
      }));
    } else {
      setJobData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async () => {
    const {
      jobTitle,
      companyName,
      location,
      jobType,
      salaryRange,
      applicationDeadline,
      jobDescription,
    } = jobData;

    if (
      !jobTitle ||
      !companyName ||
      !location ||
      !jobType ||
      !salaryRange.min ||
      !salaryRange.max ||
      !applicationDeadline ||
      !jobDescription
    ) {
      toast.error('Please fill in all required fields');
      return;
    }

    try {
      await createJob(jobData);
      toast.success('Job created successfully!');
      handleClose();
    } catch (err) {
      toast.error('Failed to create job. Please try again.');
    }
  };

  const inputStyle = {
    width: '376px',
    height: '58px',
    borderRadius: '10px',
    border: '1px solid rgba(34, 34, 34, 1)',
  };

  const styleRange = {
    width: '183px',
    height: '58px',
    borderRadius: '10px',
    border: '1px solid rgba(188, 188, 188, 1)',
  };

  const textAreaStyle = {
    width: '768px',
    height: '169px',
    borderRadius: '10px',
    border: '1px solid rgba(188, 188, 188, 1)',
  };

  const publishButtonStyle = {
    width: '232px',
    height: '59px',
    borderRadius: '10px',
    backgroundColor: '#007FFF',
    color: '#FFFFFF',
    border: 'none',
    fontWeight: '600',
    fontSize: '16px',
    padding: '16px 60px',
    boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    cursor: 'pointer',
    marginLeft: '245px',
  };

  const saveDraftButtonStyle = {
    width: '232px',
    height: '59px',
    borderRadius: '10px',
    backgroundColor: '#FFFFFF',
    color: '#000000',
    border: '1.5px solid rgba(34, 34, 34, 1)',
    fontWeight: '600',
    fontSize: '16px',
    padding: '16px 60px',
    boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    cursor: 'pointer',
  };

  return (
    <Modal show={show} onHide={handleClose} centered size="lg" contentClassName="overflow-hidden">
      <Modal.Body className="p-4">
        <h4 className="fw-semibold mb-4 text-center" style={{ fontFamily: 'Satoshi Variable', fontWeight: 700, fontSize: '24px' }}>
          Create Job Opening
        </h4>
        <Form>
          <Row className="mb-3">
            <Col md={6} className="mb-3">
              <Form.Label>Job Title</Form.Label>
              <Form.Control
                style={inputStyle}
                type="text"
                name="jobTitle"
                value={jobData.jobTitle}
                onChange={handleChange}
                placeholder="Full Stack Developer"
              />
            </Col>
            <Col md={6}>
              <Form.Label>Company Name</Form.Label>
              <Form.Control
                style={inputStyle}
                type="text"
                name="companyName"
                value={jobData.companyName}
                onChange={handleChange}
                placeholder="Amazon, Microsoft, Swiggy"
              />
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6} className="mb-3">
              <Form.Label>Location</Form.Label>
              <Form.Select name="location" value={jobData.location} onChange={handleChange} style={inputStyle}>
                <option value="">Choose Preferred Location</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Remote">Remote</option>
              </Form.Select>
            </Col>
            <Col md={6}>
              <Form.Label>Job Type</Form.Label>
              <Form.Select name="jobType" value={jobData.jobType} onChange={handleChange} style={inputStyle}>
                <option value="">Select Type</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Internship">Internship</option>
                <option value="Contract">Contract</option>
              </Form.Select>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6} className="mb-3">
              <Form.Label>Salary Range</Form.Label>
              <div className="d-flex gap-2">
                <Form.Control
                  style={styleRange}
                  type="number"
                  name="salaryMin"
                  value={jobData.salaryRange.min}
                  onChange={handleChange}
                  placeholder="₹0"
                />
                <Form.Control
                  style={styleRange}
                  type="number"
                  name="salaryMax"
                  value={jobData.salaryRange.max}
                  onChange={handleChange}
                  placeholder="₹12,00,000"
                />
              </div>
            </Col>
            <Col md={6}>
              <Form.Label>Application Deadline</Form.Label>
              <Form.Control
                style={inputStyle}
                type="date"
                name="applicationDeadline"
                value={jobData.applicationDeadline}
                onChange={handleChange}
              />
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>Job Description</Form.Label>
            <Form.Control
              style={textAreaStyle}
              as="textarea"
              rows={3}
              name="jobDescription"
              value={jobData.jobDescription}
              onChange={handleChange}
              placeholder="Share a description about the job role"
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Company Logo URL (Optional)</Form.Label>
            <Form.Control
              style={inputStyle}
              type="text"
              name="imageUrl"
              value={jobData.imageUrl}
              onChange={handleChange}
              placeholder="https://example.com/logo.png"
            />
          </Form.Group>

          <div style={{ display: 'flex', gap: '16px', marginTop: '32px' }}>
            <button style={saveDraftButtonStyle} type="button">
              Save Draft <span>⬇</span>
            </button>

            <button style={publishButtonStyle} onClick={handleSubmit} type="button">
              Publish <span>»</span>
            </button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default CreateJobModal;