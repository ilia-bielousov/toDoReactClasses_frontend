import mongoose, { model } from "mongoose";

const Note = mongoose.Schema({
  note: {
    type: String,
    default: 'myNote'
  }
}, {
  timestamps: true
});

export default model('Note', Note);

