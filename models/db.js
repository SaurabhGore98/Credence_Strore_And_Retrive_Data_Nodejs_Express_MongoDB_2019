const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/MovieDB', { useNewUrlParser: true,useUnifiedTopology:true,useFindAndModify:false }, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
});

require('./movie');