const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId
const { QUESTIONS, FORMS } = require('../../config/schema');

let QuestionSchema = new Schema({
    form: { type: ObjectId, ref: FORMS, required: true },
    question: { type: String, required: true },
    answer: [{ type: String, required: true }],
    question_type: {
        type: String,
        required: true,
        enum: [
            'drop_down',
            'text',
            'multi_choice',
            'radio'
        ]
    }
}, { timestamps: true });

const QuestionModel = mongoose.model(QUESTIONS, QuestionSchema);

module.exports = QuestionModel;