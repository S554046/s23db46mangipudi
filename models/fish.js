const mongoose = require("mongoose")
const fishSchema = mongoose.Schema({
fish_type: String,
fish_name: String,
fish_cost: Number
})
module.exports = mongoose.model("fish",fishSchema)