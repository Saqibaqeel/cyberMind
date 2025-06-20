const Job = require('../models/jobModel');
const User = require('../models/userModel');

// Create a Job
const createJob = async (req, res) => {
  try {
    const {
      jobTitle,
      jobDescription,
      companyName,
      location,
      salaryRange,
      applicationDeadline,
      jobType,
      imageUrl
    } = req.body;

    // Validation
    if (
      !jobTitle ||
      !jobDescription ||
      !companyName ||
      !location ||
      !salaryRange?.min ||
      !salaryRange?.max ||
      !applicationDeadline ||
      !jobType
    ) {
      return res.status(400).json({ msg: 'Please fill all the fields' });
    }

    const job = new Job({
      jobTitle,
      jobDescription,
      companyName,
      location,
      salaryRange: {
        min: salaryRange.min,
        max: salaryRange.max
      },
      applicationDeadline,
      jobType,
      imageUrl
    });

    await job.save();
    res.status(201).json({ msg: 'Job created successfully', job });

  } catch (error) {
    console.error('Create Job Error:', error);
    res.status(500).json({ msg: 'Server error while creating job' });
  }
};



// Get Job by ID
const getJobById = async (req, res) => {
  try {
    const { id } = req.params;
    const job = await Job.findById(id).populate('postedBy', 'name email');

    if (!job) {
      return res.status(404).json({ msg: 'Job not found' });
    }

    res.status(200).json(job);
  } catch (error) {
    res.status(500).json({ msg: 'Server error while fetching job' });
  }
};



const getAlljobs = async (req, res) => {
  try {
    const jobs = await Job.find({}).sort({ createdAt: -1 });

    

    if (!jobs || jobs.length === 0) {
      return res.status(404).json({ msg: 'No jobs found' });
    }

    res.status(200).json(jobs);
  } catch (error) {
    
    res.status(500).json({ msg: 'Server error while fetching jobs' });
  }
};

const searchJob = async (req, res) =>  {
  try {
    // 1. Destructure possible filters from query string
    const {
      title,        // partial match against jobTitle
      location,     // exact match
      jobType,      // exact match
      minSalary,    // lower bound
      maxSalary     // upper bound
    } = req.query;

    // 2. Build dynamic MongoDB filter
    const filter = {};

    if (title) {
      filter.jobTitle = { $regex: title, $options: 'i' };
    }
    if (location) {
      filter.location = location;
    }
    if (jobType) {
      filter.jobType = jobType;
    }
    if (minSalary || maxSalary) {
      filter['salaryRange.min'] = {};
      if (minSalary) filter['salaryRange.min'].$gte = Number(minSalary);
      if (maxSalary) filter['salaryRange.min'].$lte = Number(maxSalary);
    }

    // 3. Execute query
    const jobs = await Job.find(filter).sort({ createdAt: -1 });

    // 4. Return results
    return res.status(200).json(jobs);
  } catch (err) {
    console.error('Error searching jobs:', err);
    return res.status(500).json({ msg: 'seach failed' });
  }
};



module.exports = {
  createJob,
  getJobById,
  searchJob,


  getAlljobs
};
