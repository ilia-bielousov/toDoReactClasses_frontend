import Note from '../Models/Note.js';

export const addNote = async (req, res) => {
  console.log(req.body);
  const doc = new Note({
    user: req.userId,
    text: req.body.text,
    profile: req.body.profile
  });

  await doc.save();

  return res.json({ succes: true});
}

export const getAllNotes = async (req, res) => {
  const notes = await Note.find({ user: req.userId });

  return res.json(notes);
}