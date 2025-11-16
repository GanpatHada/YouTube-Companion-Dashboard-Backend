const Log = require("../models/Log");

// Create a new log
exports.createLog = async (req, res) => {
  try {
    const log = new Log(req.body);
    await log.save();
    res.status(201).json({ success: true, log });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to save log", error: err.message });
  }
};

// Get all logs
exports.getLogs = async (req, res) => {
  try {
    const logs = await Log.find().sort({ createdAt: -1 });
    res.status(200).json(logs);
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to fetch logs", error: err.message });
  }
};
