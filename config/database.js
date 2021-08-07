const mongoose = require("mongoose");

let options = {
    //     auth: {
    //         user: process.env.DB_USER,
    //         password: process.env.DB_PASS,
    //     },
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
};

mongoose
    .connect(process.env.CONSTRING, options)
    .then((res) => {
        console.log("🥳 Connected to the database..!!");
        console.log("Happy Coding 🤘. Reach me out https://github.com/YashwantSingh7062")
    })
    .catch((err) => {
        console.log(`Error::${err}`);
    });
