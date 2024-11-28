const mongoose = require('mongoose');

const boothSchema = new mongoose.Schema({
  boothNumber: {
    type: String,
    required: true,
    unique: true
  },
  size: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['Available', 'Reserved'],
    required: true
  },
  floor: {
    type: String,
    enum: ['Ground Floor', 'First Floor', 'Second Floor'],
    default: 'Ground Floor', 
    required: true 
  }
});

const Booth = mongoose.model('Booth', boothSchema);

module.exports = Booth;
