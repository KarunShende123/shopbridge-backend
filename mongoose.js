const mongoose = require( 'mongoose' );
const dotenv = require( 'dotenv' ).config();

module.exports = function (  ){
    let url = process.env.MONGODB_URI;
    let db = mongoose.connect(url, {
        useNewUrlParser: true, useUnifiedTopology: true
    });

    require("./models/mobile.model")
    return db;
}