const mongoose = require("mongoose")
const fishSchema = mongoose.Schema({
fish_type: String,
fish_name: {
    type: String,
    required: true,
    match: /^[a-zA-Z]+$/
},
fish_cost: {
    type: Number,
    min:1,
    max:10000
} 
})
module.exports = mongoose.model("fish",fishSchema)