const mongoose = require('mongoose')
// const PointSchema = require('./utils/PointSchema');

const DevSchema = new mongoose.Schema({
    name: String,
    bio: String,
    location: String
    // // avatar_url: String,
    // interest: [String],
    // location: {
    //     type: PointSchema,
    //     index: '2dsphere'
    // }
})

module.exports = mongoose.model('Users', DevSchema );