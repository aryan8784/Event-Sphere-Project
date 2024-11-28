const Expo = require('../model/expo')
const mongoose = require('mongoose');
require('dotenv').config();
const bcrypt = require('bcrypt');
const route = require('../routes/routes')
const Booth = require ('../model/booth')

class BoothConrtoller{

// Create Booth
static async CreateBooth(req, res) {
    try {
      const { boothNumber, size, status, floor } = req.body;
      const CreBooth = new Booth({ boothNumber, size, status, floor });
      const Create = await CreBooth.save();

      res.status(200).json({
        success: true,
        message: "New Booth has created",
        Create,
      });
    } catch (err) {
      console.error(err.message);
      res.status(500).json({
        success: false,
        message: err.message,
      });
    }
  }


//Get All the Booths

static async GetAllBooths(req, res) {
  try {
    const booths = await Booth.find();
    res.status(200).json(booths);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Failed to fetch booths' });
  }
}




}

module.exports= BoothConrtoller;