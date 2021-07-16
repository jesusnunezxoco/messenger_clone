// NOTE: Database Server Connection
require("dotenv").config(); 
const mongoose = require("mongoose");


const connectDB = () => {

  let mongoUrl = process.env.DEV_DB_URL;

  mongoose
    .connect(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB connected...."))
    .catch((err) => {
      console.log(err)
      process.exit(1)
    });
};

module.exports = connectDB