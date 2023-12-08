const express = require("express");
const isUserLoggedIn = require("../../middlewares/Authentication/auth");
const {
  JobPostController,
  JobStatusUpdate,
} = require("../../controllers/jobPost/jobpost");
const JobRoutes = express.Router();
JobRoutes.post("/postajob", isUserLoggedIn, JobPostController);
JobRoutes.put("/updatestatus", isUserLoggedIn, JobStatusUpdate);
module.exports = JobRoutes;
