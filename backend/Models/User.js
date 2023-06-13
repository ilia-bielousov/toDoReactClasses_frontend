import { Schema, model } from "mongoose";

const User = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  notes: [{
    type: String,
    ref: 'Note'
  }]
});

export default model('User', User);