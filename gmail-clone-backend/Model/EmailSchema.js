const mongoose = require("mongoose");

const EmailSchema = new mongoose.Schema(
  {
    sendersaddress: {
      type: String,
      required: true,
    },
    receiversaddress: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    user: {
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

module.exports = mongoose.model("Email", EmailSchema);
