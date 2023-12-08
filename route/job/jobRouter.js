const express = require("express");
const isUserLoggedIn = require("../../middlewares/Authentication/auth");
const JobPostController = require("../../controllers/jobPost/jobpost");
const JobRoutes = express.Router();
JobRoutes.post("/postajob", isUserLoggedIn, JobPostController);
module.exports = JobRoutes;
