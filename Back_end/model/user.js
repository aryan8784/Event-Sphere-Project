// Example schema for User model
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  lname: String,
  city: String,
  gender: String,
  email: { type: String, unique: true },
  password: String,
  role: {
    type: String,
    enum: ['attendee', 'admin', 'other'], // Define possible roles
    default: 'attendee' // Set a default role (can be changed as needed)
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
