const Note = require("../models/Note");


exports.createNote = async (req, res) => {
  try {
    const { name, email, note, tags, userId } = req.body;
    const newNote = await Note.create({
      name,
      email,
      note,
      tags,
      userId,
    });

    res.status(201).json({
      message: "Note created successfully",
      data: newNote,
    });
  } catch (err) {
    res.status(500).json({
      message: "Failed to create note",
      error: err.message,
    });
  }
};


exports.getAllNotes = async (_, res) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });
    res.status(200).json({message:'notes fetched successfully',data:notes});
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch notes", error: err.message });
  }
};
