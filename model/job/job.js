const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      required: true,
    },
    logoUrl: {
      type: String,
      required: true,
    },
    jobPosition: {
      type: String,
      required: true,
    },
    monthlySalary: {
      type: String,
      required: true,
    },
    jobType: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    jobDescription: {
      type: String,
      required: true,
    },
    aboutCompany: {
      type: String,
      required: true,
    },
    skillsRequired: {
      type: String,
      required: true,
    },
    information: {
      type: String,
      required: true,
    },
  },
  { collection: "job-data" }
);

const JobData = mongoose.model("Joblist", jobSchema);

module.exports = JobData;
