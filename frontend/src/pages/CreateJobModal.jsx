import React, { useState } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
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
    if (
      !jobData.jobTitle ||
      !jobData.companyName ||
      !jobData.location ||
      !jobData.jobType ||
      !jobData.salaryRange.min ||
      !jobData.salaryRange.max ||
      !jobData.applicationDeadline ||
      !jobData.jobDescription
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

  return (
    <Modal show={show} onHide={handleClose} centered size="lg" className="rounded-4">
      <Modal.Body className="p-4">
        <h4 className="fw-semibold mb-4">Create Job Opening</h4>
        <Form>
          <Row className="mb-3">
            <Col xs={12} md={6} className="mb-3 mb-md-0">
              <Form.Label>Job Title</Form.Label>
              <Form.Control
                type="text"
                name="jobTitle"
                value={jobData.jobTitle}
                onChange={handleChange}
                placeholder="Full Stack Developer"
              />
            </Col>
            <Col xs={12} md={6}>
              <Form.Label>Company Name</Form.Label>
              <Form.Control
                type="text"
                name="companyName"
                value={jobData.companyName}
                onChange={handleChange}
                placeholder="Amazon, Microsoft, Swiggy"
              />
            </Col>
          </Row>

          <Row className="mb-3">
            <Col xs={12} md={6} className="mb-3 mb-md-0">
              <Form.Label>Location</Form.Label>
              <Form.Select name="location" value={jobData.location} onChange={handleChange}>
                <option value="">Choose Preferred Location</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Remote">Remote</option>
              </Form.Select>
            </Col>
            <Col xs={12} md={6}>
              <Form.Label>Job Type</Form.Label>
              <Form.Select name="jobType" value={jobData.jobType} onChange={handleChange}>
                <option value="">Select Type</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Internship">Internship</option>
                <option value="Contract">Contract</option>
              </Form.Select>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col xs={12} md={6} className="mb-3 mb-md-0">
              <Form.Label>Salary Range</Form.Label>
              <div className="d-flex flex-column flex-sm-row gap-2">
                <Form.Control
                  type="number"
                  name="salaryMin"
                  value={jobData.salaryRange.min}
                  onChange={handleChange}
                  placeholder="₹0"
                />
                <Form.Control
                  type="number"
                  name="salaryMax"
                  value={jobData.salaryRange.max}
                  onChange={handleChange}
                  placeholder="₹12,00,000"
                />
              </div>
            </Col>
            <Col xs={12} md={6}>
              <Form.Label>Application Deadline</Form.Label>
              <Form.Control
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
              type="text"
              name="imageUrl"
              value={jobData.imageUrl}
              onChange={handleChange}
              placeholder="https://example.com/logo.png"
            />
          </Form.Group>

          <div className="d-flex flex-column flex-md-row justify-content-between gap-2">
            <Button variant="outline-dark" className="rounded-pill px-4 w-100 w-md-auto">
              Save Draft ⌄
            </Button>
            <Button
              variant="primary"
              className="rounded-pill px-4 w-100 w-md-auto"
              onClick={handleSubmit}
            >
              Publish &raquo;
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default CreateJobModal;
