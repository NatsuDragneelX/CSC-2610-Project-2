const mongoose = require('mongoose');

const parkingSchema = new mongoose.Schema({
    lotName: String,
    availability: Number,
    day: String
});

const Parking = mongoose.model('Parking', parkingSchema);
module.exports = Parking;
