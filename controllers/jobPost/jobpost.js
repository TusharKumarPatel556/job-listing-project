const JobData = require("../../model/job/job");
const jwt = require("jsonwebtoken");

const JobPostController = (req, res) => {
  res.send({
    message: "api is working",
  });
};

module.exports = JobPostController;
