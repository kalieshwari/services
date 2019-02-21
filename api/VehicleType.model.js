const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let VehicleType= new Schema({
  vehicle_body: {
    type: String
  },
  vehicle_make: {
    type: String
  },
  vehicle_model: {
    type: String
  },
},{
    collection: 'vehicletype'
});

module.exports = mongoose.model('VehicleType', VehicleType);