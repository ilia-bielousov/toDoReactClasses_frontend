import Note from '../Models/Note.js';

export const addNote = async (req, res) => {
  const doc = new Note({
    user: req.userId,
    text: req.body.text
  });

  const note = await doc.save();

  return res.json(note);
}

export const getAllNotes = async (req, res) => {
  const notes = await Note.find({ user: req.userId });

  return res.json(notes);
}