const mongoose = require ('mongoose');
const expoSchema = new mongoose.Schema({
    title:{
     type :String,
     required: true
    },
    date:{
     type:Date,
     required: true
    },
    location:{
     type :String,
     required: true
    },
    description:{
     type :String,
     required: true
    },
    theme:{
     type :String,
     required: true
    },
    booths: [
     {
       boothNumber: {
         type: String,
         required: true
       },
       size: {
         type: String,
         required: true
       },
       status: {
         type: String,
         enum: ['available', 'reserved', 'occupied'], 
         default: 'available'
       }
     }
   ]
   
})
module.exports = mongoose.model('Expo',expoSchema)