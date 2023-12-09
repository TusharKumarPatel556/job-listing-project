const JobData = require("../../model/job/job");
const jwt = require("jsonwebtoken");
const isUserLoggedIn = require("../../middlewares/Authentication/auth");

const JobPostController = async (req, res) => {
  try {
    const {
      companyName,
      logoUrl,
      jobPosition,
      monthlySalary,
      jobType,
      location,
      jobDescription,
      aboutCompany,
      skillsRequired,
      information,
    } = req.body;

    console.log(
      companyName,
      logoUrl,
      jobPosition,
      monthlySalary,
      jobType,
      location,
      jobDescription,
      aboutCompany,
      skillsRequired,
      information
    );
    const jobpost = await JobData.create({
      companyName,
      logoUrl,
      jobPosition,
      monthlySalary,
      jobType,
      location,
      jobDescription,
      aboutCompany,
      skillsRequired,
      information,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    res.send({
      message: "Job Posted",
      recruiter: req.user.name,
    });
  } catch (err) {
    res.send({
      message: "failed",
    });
  }
};

const JobStatusUpdate = async (req, res) => {
  try {
    const {
      companyName,
      logoUrl,
      jobPosition,
      monthlySalary,
      jobType,
      location,
      jobDescription,
      aboutCompany,
      skillsRequired,
      information,
      id,
    } = req.body;

    await JobData.updateOne(
      { _id: id },
      {
        $set: {
          companyName: companyName,
          logoUrl: logoUrl,
          jobPosition: jobPosition,
          monthlySalary: monthlySalary,
          jobType: jobType,
          location: location,
          jobDescription: jobDescription,
          aboutCompany: aboutCompany,
          skillsRequired: skillsRequired,
          information: information,
          updatedAt: new Date(),
        },
      }
    );
    res.status(200).json({
      user: "Record Updated",
    });
  } catch (err) {
    res.send({
      message: "Update Failed",
    });
  }
};

const AllJobs = async (req, res) => {
  try {
    const users = await JobData.find().select(
      "companyName logoUrl skillsRequired monthlySalary jobPosition location"
    );
    res.status(200).json({
      users: users,
    });
  } catch (err) {
    res.status(500).send({
      message: "Can no find any User",
    });
  }
};

const JobDescription = async (req, res) => {
  try {
    const jobId = req.params.id;
    const jobDetails = await JobData.findById(jobId);
    res.json({
      data: jobDetails,
    });
  } catch (err) {
    res.status(500).json({
      message: "something went wrong",
    });
  }
};

const GetJobs = async (req, res) => {
  try {
    const { skillsRequired, jobPosition } = req.body;
    const jobs = await JobData.find(
      {
        skillsRequired: { $regex: skillsRequired },
        jobPosition: { $regex: jobPosition },
      },
      {
        companyName: 1,
        logoUrl: 1,
        monthlySalary: 1,
        jobType: 1,
        location: 1,
        jobDescription: 1,
        aboutCompany: 1,
        information: 1,
      }
    );
    res.json({
      jobs: jobs,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

module.exports = {
  JobPostController,
  JobStatusUpdate,
  AllJobs,
  JobDescription,
  GetJobs,
};
