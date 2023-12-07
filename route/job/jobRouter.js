const express = require("express");

const JobPostController = require("../../controllers/jobPost/jobpost");

const JobRoutes = express.Router();

JobRoutes.post("/postajob", (req, res) => {
  res.json({
    message: "hi",
  });
});

module.exports = JobRoutes;
