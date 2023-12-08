const UserData = require("../../model/user/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//Register Controller
const UserRegisterController = async (req, res) => {
  try {
    const { name, email, mobile, password } = req.body;
    const encryptedPassword = await bcrypt.hash(password, 10);
    if (name) {
      if (email) {
        if (mobile) {
          if (password) {
            const UserExists = await UserData.findOne({
              email: email,
              mobile: mobile,
            });

            if (!UserExists) {
              const user = await UserData.create({
                name: name,
                email: email,
                mobile: mobile,
                password: encryptedPassword,
                createdAt: new Date(),
                updatedAt: new Date(),
              });

              res.status(200).json({
                status: "User creation Successfull",
                // message: {
                //   userexists: UserExists,
                //   name: name,
                //   email: email,
                //   mobile: mobile,
                //   password: encryptedPassword,
                //   createdAt: new Date(),
                //   updatedAt: new Date(),
                // },
              });
            } else {
              res.json({
                message: "User Exists",
              });
            }
          } else {
            res.json({
              message: "Password is Required",
            });
          }
        } else {
          res.json({
            message: "Mobile Number  is Required",
          });
        }
      } else {
        res.json({
          message: "Email is Required",
        });
      }
    } else {
      res.json({
        message: "Name is Required",
      });
    }
  } catch (err) {
    res.status(500).json({
      status: "User creation Failed",
      message: err.message,
    });
  }
};

//Login Controller
const UserLoginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserData.findOne({ email });

    const passwordMatched = await bcrypt.compare(password, user.password);

    if (!passwordMatched) {
      res.status(500).json({
        message: "password did not matched",
      });
    } else {
      const jwtToken = jwt.sign(user.toJSON(), process.env.JWT_SECRET, {
        expiresIn: 1200,
      });
      res.status(200).json({
        message: `${user.name}  signed in successfully`,
        token: jwtToken,
      });
    }
  } catch (err) {
    res.json({
      message: err.message,
    });
  }
};

module.exports = { UserRegisterController, UserLoginController };
