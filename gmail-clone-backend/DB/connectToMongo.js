const mongoose = require("mongoose");
const MONGOURI = process.env.MONGOURI;

const connectToMongo = async () => {
  try {
    await mongoose.connect(MONGOURI, {});
    console.log("Connection to the database was successfull!!");
  } catch (err) {
    console.log("The connection to the database ended up with the err " + err);
  }
};

module.exports = connectToMongo;
