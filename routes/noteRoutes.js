const express = require("express");
const router = express.Router();
const { createNote, getAllNotes } = require("../controllers/noteController");
const noteValidationSchema = require("../validations/note.validation");
const validate = require("../middlewares/validate.middleware");

router.post("/",validate(noteValidationSchema),createNote);
router.get("/", getAllNotes);

module.exports = router;
