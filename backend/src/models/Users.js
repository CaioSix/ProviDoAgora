const mongoose = require('mongoose')
// const PointSchema = require('./utils/PointSchema');

const DevSchema = new mongoose.Schema({
    name: String,
    bio: String,
    location: String,
    destination: String,
    email: String,
    tel: Number,
    date: { type: Date, default: Date.now },
    date: String
    // interest: [String],

})

module.exports = mongoose.model('Users', DevSchema );