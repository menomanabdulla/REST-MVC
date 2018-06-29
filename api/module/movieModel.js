const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MovieSchema =  new Schema({
    name:{
        type: String,
        required: true
    },
    year:{
        type: String,
        required: true
    },
    director:{
        type: String,
        required: true,
    },
    catagory: String,
    duration: String
})

const Movie = mongoose.model('Movie', MovieSchema)

module.exports = Movie