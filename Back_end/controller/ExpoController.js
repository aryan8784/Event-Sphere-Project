const Expo = require("../model/expo");
const mongoose = require("mongoose");
require("dotenv").config();
const bcrypt = require("bcrypt");
const route = require("../routes/routes");

class ExpoConrtoller {
  // Create Expo
  static async Create(req, res) {
    try {
      const { title, date, location, description, theme } = req.body;

      // Basic validation
      if (!title || !date || !location || !description || !theme) {
        return res.status(400).json({
          success: false,
          message: "All fields are required.",
        });
      }

      const expoCreate = new Expo({
        title,
        date,
        location,
        description,
        theme,
      });
      const createdExpo = await expoCreate.save();

      res.status(201).json({
        success: true,
        message: "New Expo has been added",
        data: createdExpo, // This is already returning the created event
      });
    } catch (err) {
      console.error(err.message);
      res.status(500).json({
        success: false,
        message: "Server error. Please try again later.",
      });
    }
  }

  // Get All Events
  static async GetAll(req, res) {
    try {
      const events = await Expo.find(); // Fetch all events from the database
      res.status(200).json(events); // Ensure this sends the events as an array
    } catch (err) {
      console.error(err.message);
      res
        .status(500)
        .json({ message: "Server error. Please try again later." });
    }
  }
}
module.exports = ExpoConrtoller;
