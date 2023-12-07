const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
dotenv.config();

//Imports
const UserRoutes = require("./route/user/userRoute");
const JobRoutes = require("./route/job/jobRouter");
const { errorHandler, notFound } = require("./middlewares/error/errorHandler");

//MiddleWares
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// routes
app.use("/api/users", UserRoutes);
app.use("/api/jobs", JobRoutes);

app.use(notFound);
app.use(errorHandler);
app.listen(process.env.PORT, () => {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
      console.log(`Server running on http://localhost:${process.env.PORT}`);
    })
    .catch((err) => console.error(err));
});
