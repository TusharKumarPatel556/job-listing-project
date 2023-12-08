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

module.exports = { JobPostController, JobStatusUpdate };
