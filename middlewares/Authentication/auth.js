const jwt = require("jsonwebtoken");
const isUserLoggedIn = (req, res, next) => {
  try {
    const token = req.headers.jwttoken;
    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.user = user;
  } catch (err) {
    res.status(500).json({
      message: "Please LogIn First",
    });
  }

  next();
};

module.exports = isUserLoggedIn;
