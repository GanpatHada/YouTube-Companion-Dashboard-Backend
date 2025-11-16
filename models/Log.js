const mongoose = require("mongoose");

const logSchema = new mongoose.Schema(
  {
    action: { type: String, required: true },
    message: { type: String, required: true },
    user: {
      name: String,
      email: String,
    },
    videoId: String,
    extra: Object,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Log", logSchema);