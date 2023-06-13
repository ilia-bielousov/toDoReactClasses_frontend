import express from "express";
import mongoose from "mongoose";

import { registration, login } from "./Controllers/auth.js";

const app = express();
const port = 5000;

mongoose.connect('mongodb+srv://user:user@cluster0.haueao7.mongodb.net/toDo')
  .then(() => console.log('db ok'))
  .catch((error) => console.log(error));

app.use(express.json());

app.post('/registration', registration);
app.post('/login', login);

app.listen(port, () => {
  try {
    console.log('server OK');
  } catch (error) {
    console.log(error);
  }
});