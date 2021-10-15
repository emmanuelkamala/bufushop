import express from 'express';
import User from '../models/User.js';
import CryptoJS from 'crypto-js';

const authRouter = express.Router();

authRouter.post('/register', async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString(),
  })

  try {
    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
})

authRouter.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(404).json("Wrong credentials");

    const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
    const passwordString = hashedPassword.toString(CryptoJS.enc.Utf8);

    passwordString !== req.body.password && res.status(404).json("Wrong credentials");

    res.status(200).json(user);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
})

export default authRouter;
