import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import { check } from 'express-validator';
import { registration, login } from "./Controllers/auth.js";
import { addNote, getAllNotes } from "./Controllers/note.js";
import chekAuth from "./chekAuth.js";

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://user:user@cluster0.haueao7.mongodb.net/toDo')
  .then(() => console.log('db ok'))
  .catch((error) => console.log(error));

app.post('/registration', [
  check('username', 'Имя пользователя не может быть пустым и минимум 3 символа').notEmpty().isLength({ min: 3, max: 10 }),
  check('password', 'Пароль делжен быть больше 4 и меньше 10').isLength({ min: 4, max: 10 })
], registration);
app.post('/login', chekAuth, login);

app.post('/add-note', chekAuth, addNote);
app.get('/notes', chekAuth, getAllNotes);

app.listen(port, () => {
  try {
    console.log('server OK');
  } catch (error) {
    console.log(error);
  }
});