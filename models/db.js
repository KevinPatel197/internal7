const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/VehicleDb');
var db = mongoose.connection;

db.on('error', () => {
    console.log('Error...');
});
db.on('connected', () => {
    console.log('Connected...');
});

var CategorySchema = mongoose.Schema({
   category_name: String
});
var vehicleDataSchema = mongoose.Schema({
    vehicle_brand: String,
    category_name: String,
    vehicle_picture: String,
    price: Number,
    depreciation: Number,
    number_of_years: Number,
    total_price: Number
});

var vehicle1 = mongoose.model('vehicle_category', CategorySchema);
var vehicle2 = mongoose.model('vehicle_data', vehicleDataSchema);
module.exports = { vehicle1, vehicle2 };