import User from "../Models/User.js";

export const registration = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const candidate = await User.findOne({ $or: [ { username }, { email } ]});

    if (candidate) {
      return res.status(400).json({ message: 'Пользователь c такими данными уже существует' });
    }

    const user = new User({ username, password, email });
    user.save();

    return res.status(200).json({ message: 'Пользователь успешно зарегистрирован' });
  } catch (error) {
    res.status(400).json({ message: 'Ошибка регистрации'});

    console.log(error);
  }
}

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'Пользователь не найден' });
    }

    return res.status(200).json( { user });
  } catch(error) {
    res.status(400).json({ message: 'Что-то пошло не так' });
  }
}