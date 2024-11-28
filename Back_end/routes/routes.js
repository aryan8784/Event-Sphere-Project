const express = require("express");
const bodyparser = require("body-parser");
const connectDB = require("../config/connect");

const ExpoConrtoller = require("../controller/ExpoController");
const BoothConrtoller = require("../controller/BoothController");
const UserController = require("../controller/UserController");

const cors = require("cors");

let router = express();
router.use(cors());
router.use(bodyparser.json());
connectDB();

// Expo Routes
router.post("/Create", ExpoConrtoller.Create);
router.get("/Events", ExpoConrtoller.GetAll);

//Booth Routes
router.post("/CreateBooth", BoothConrtoller.CreateBooth);
router.get("/GetAllBooths", BoothConrtoller.GetAllBooths);

//singup
router.post("/CreateUser", UserController.UserRegister);
//login
router.post("/UserLogin", UserController.UserLogin);

module.exports = router;
