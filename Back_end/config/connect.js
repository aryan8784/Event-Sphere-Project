const mongoose = require('mongoose');
require('dotenv').config();
const dburl = process.env.DATABASE_URL

//connection to to mongodb atlas
const connectDB = () => {
     const connection = mongoose.connect(dburl)
     const db = mongoose.connection

     db.on("error", (err) => { console.log(err) })
     db.once("open", () => { console.log("DATABASE CONNECTED") })
}

module.exports = connectDB