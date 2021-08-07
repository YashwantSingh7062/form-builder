const { FORMS, QUESTIONS } = require("../../config/schema");
const { asyncWrapper } = require("../helpers/general");

module.exports = {
    Form: {
        questions: asyncWrapper(async (parent, args, { mongoQ }) => {
            let questions = await mongoQ.find(QUESTIONS, { form: parent._id });
            return questions;
        }),
    },
    Query: {
        // Accessibility :: Everyone
        forms: asyncWrapper(async (parent, args, { mongoQ }) => {
            let filter = [{ $sort: { createdAt: -1 } }] // -1 for desc, 1 for asc
            if (args.offset) filter.push({ $skip: args.offset });
            if (args.limit) filter.push({ $limit: args.limit });

            return {
                forms: await mongoQ.aggregate(FORMS, filter, ""),
                pageInfo: {
                    offset: args.offset || 0
                },
            }
        }),

        // Accessibility :: Everyone 
        // Params :: slug
        form: asyncWrapper(async (parent, { slug }, { mongoQ }) => {
            let form = await mongoQ.findOne(FORMS, { slug }, {}, "")
            return form._doc
        }),
    },
    Mutation: {
        // Accessibility :: Everyone
        // Params : name
        addForm: async (_parent, args, { mongoQ }) => {
            let ifExist = await mongoQ.find(FORMS, { title: args.form.title });
            if (ifExist) throw new Error("Form Already Exist...")

            let form = await mongoQ.save(FORMS, args.form);
            return form._doc
        },

        // Accessibility :: Everyone
        // Params:: form, questions
        addQuestions: async (_parent, args, { mongoQ }) => {
            let form = await mongoQ.findOne(FORMS, { _id: args.question.form }, {}, "");
            if (!form) throw new Error("Form try to add form first!");

            let questions = args.question.questions.map(question => ({ ...question, form: args.question.form }));
            let inserted = await mongoQ.insertMany(QUESTIONS, questions);

            if (inserted.length < 1) throw new Error("Something went wrong!!");
            return form._doc
        }
    }
};


