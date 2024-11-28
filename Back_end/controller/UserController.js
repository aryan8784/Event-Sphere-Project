const mongoose = require("mongoose");
const User = require("../model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

require("dotenv").config();
class UserController {
  //UserRegister
  static async UserRegister(req, res) {
    try {
      const { name, lname, city, gender, email, password, retypePassword } =
        req.body;
      const checkEmail = await User.findOne({ email: email });
      if (checkEmail) {
        return res.status(400).json({
          success: true,
          message: "Email already exist!",
        });
      }
      if (password != retypePassword) {
        res.status(200).json({
          success: false,
          message: "Password doesn't match",
        });
      }
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(password, salt);

      const UserReg = new User({
        name: name,
        lname: lname,
        city: city,
        gender: gender,
        email: email,
        password: hash,
      });

      await UserReg.save();
      res.status(200).json({
        success: true,
        message: "User Register Successfully",
      });
    } catch (err) {
      console.log(err);
      res.status(200).json({
        success: false,
        message: err.message,
      });
    }
  }

  //USER LOGIN

  static async UserLogin(req, res) {
    try {
      const { email, password } = req.body;

      const FindUser = await User.findOne({ email: email });

      if (!FindUser) {
        return res.status(200).json({
          success: false,
          message: "User doesn't exist",
        });
      } else {
        bcrypt.compare(password, FindUser.password, (err, result) => {
          if (result) {
            const token = jwt.sign(
              {
                id: FindUser._id,
                name: FindUser.name,
                lname: FindUser.lname,
                city: FindUser.city,
                gender: FindUser.gender,
                email: FindUser.email,
                role: FindUser.role, // Include the role in the token
              },
              "hgshheyrtg5745",
              { expiresIn: "2d" }
            );
            res.status(200).json({
              success: true,
              data: {
                name: FindUser.name,
                lname: FindUser.lname,
                city: FindUser.city,
                gender: FindUser.gender,
                email: FindUser.email,
                role: FindUser.role, // Include role in the response
                token: token,
              },
            });
          } else {
            res.status(200).json({
              success: false,
              message: "Invalid password",
            });
          }
        });
      }
    } catch (err) {
      console.error(err.message);
      res.status(500).json({
        success: false,
        message: "Server error",
      });
    }
  }
}
module.exports = UserController;
