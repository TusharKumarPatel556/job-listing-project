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
    const jobpost = JobData.create({
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

module.exports = JobPostController;
