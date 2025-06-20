const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  jobTitle: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  jobType: {
    type: String,
    enum: ['Full-time', 'Part-time', 'Contract', 'Internship'],
    required: true,
  },
  salaryRange: {
    min: Number,
    max: Number,
  },
  applicationDeadline: {
    type: Date,
    required: true,
  },
  jobDescription: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    default: 'https://via.placeholder.com/150', // Default image URL
  },
}, { timestamps: true });

const Job = mongoose.model('Job', jobSchema);
module.exports = Job;
