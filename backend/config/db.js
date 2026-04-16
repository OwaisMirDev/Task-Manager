const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(`${process.env.MONGO_URI}/${process.env.DB_NAME}`);
};

module.exports = connectDB;
