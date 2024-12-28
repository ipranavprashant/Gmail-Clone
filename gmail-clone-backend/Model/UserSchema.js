const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    profilepic: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      minlength: 3,
    },
    email: {
      type: String,
      required: true,
      unique: [
        true,
        "The email is already associated with the organisation, either change you email or proceed to signing in!",
      ],
    },
    password: {
      type: String,
      required: true,
    },
    Date: {
      type: Date,
      default: Date.now(),
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
