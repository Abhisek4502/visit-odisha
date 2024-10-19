const mongoose = require("mongoose");
const db = process.env.MONGODBURI


module.exports = async () => {
  try {
    // console.log(db)
    await mongoose.connect(db)
    console.log("Connected to database.");
  } catch (error) {
    console.log(error);
    console.log("Could not connect to database.");
  }
};
