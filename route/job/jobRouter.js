const express = require("express");
const isUserLoggedIn = require("../../middlewares/Authentication/auth");
const {
  JobPostController,
  JobStatusUpdate,
  AllJobs,
  JobDescription,
  GetJobs,
} = require("../../controllers/jobPost/jobpost");
const JobRoutes = express.Router();
JobRoutes.post("/postajob", isUserLoggedIn, JobPostController);
JobRoutes.put("/updatestatus", isUserLoggedIn, JobStatusUpdate);
JobRoutes.get("/job-description/:id", JobDescription);
JobRoutes.get("/joblist", AllJobs);
JobRoutes.get("/get-jobs", GetJobs);

module.exports = JobRoutes;
