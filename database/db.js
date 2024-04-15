const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Database connected successfully !");
  } catch (error) {
    console.log("Database is not connected !");
    error;
  }
};
module.exports = dbConnection;
