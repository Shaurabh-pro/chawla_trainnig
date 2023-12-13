const mongoose = require("mongoose");
const { timeStamp } = require("console");
const { type } = require("os");


//schema for user details
const userSchema = new mongoose.Schema(
    {
      first_name: {
        type: String,
        required: true,
      },
      last_name: {
        type: String,
      },
      email: {
        type: String,
        required: true,
        Unique: true,
      },
      gender: {
        type: string,
      },
      jog_title: {
        type: string,
      },
    },
    timeStamp
  );

  const user = mongoose.model("user", userSchema);

  module.exports = user;