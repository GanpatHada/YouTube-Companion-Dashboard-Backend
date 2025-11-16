const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    note: { type: String, required: true, trim: true },
    tags: { type: [String], default: [], index: true },
    userId: { type: String, required: true,index:true},
  },
  { timestamps: true }
);

module.exports = mongoose.model("Note", noteSchema);

