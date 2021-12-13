const mongoose = require("mongoose");
const { Schema } = mongoose;

const Mobile = new Schema({
    brand_name: String,
    variant: String,
    internal_storage: Number,
    external_storage: Number,
    ram_size: Number,
    pic: String,
    front_cam_spec: Number,
    back_cam_spec: Number,
    status: String,
    price: Number,
    battery_power: Number
}, {timestamp: true});

mongoose.model('Mobile', Mobile);