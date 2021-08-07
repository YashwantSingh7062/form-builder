const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { FORMS } = require('../../config/schema');

let FormsSchema = new Schema({
    name: { type: String, required: true, unique: true },
    slug: { type: String, default: "" },
    total_response: { type: Number, default: 0 }
}, { timestamps: true });

const FormsModel = mongoose.model(FORMS, FormsSchema);

module.exports = FormsModel;