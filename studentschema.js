const mongoose = require("mongoose")
const { Schema } = mongoose;

const studentschema = new Schema({
    name: String,
    regno: String,
    marks: Number
});

module.exports = mongoose.model("stdinfo",studentschema,"Student-Info")