const mongoose = require('mongoose');

var movieSchema = new mongoose.Schema({
    movieName: {
        type: String,
        required: 'This field is required'
    },
    img: {
        type: String,
    },
    summary: {
        type: String,
        required: 'This field is required'
    }
});



mongoose.model('movie', movieSchema);