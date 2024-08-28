import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({ user });
  } catch (error) {
    res.status(500).json({
      succeded: false,
      error,
    });
  }
};

const loginUser = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ succeeded: false, message: "Bitte füllen Sie alle Felder aus" });
  }
  let foundUser = await User.findOne({ username });
  if (foundUser) {
    const isMatch = await bcrypt.compare(password, foundUser.password);
    if (isMatch) {
      const token = jwt.sign({ id: foundUser._id, username: foundUser.username }, process.env.JWT_SECRET, { expiresIn: "30d" });
      const user = { username: foundUser.username, email: foundUser.email };
      res.cookie("token", token, { maxAge: 1000 * 60 * 60 * 24 });
      res.json(user);
    } else {
      return res.status(400).json({ succeeded: false, message: "Falsches Passwort" });
    }
  } else {
    return res.status(400).json({ succeeded: false, message: "Benutzer nicht gefunden" });
  }
};
export { createUser, loginUser };
