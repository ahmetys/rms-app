import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
const createUser = async (req, res) => {
  console.log(req.body);
  try {
    const user = await User.create(req.body);
    //res.redirect("/login");
    res.status(201).json({ user });
  } catch (error) {
    console.log(error);
    if (error.code == 11000) {
      res.status(500).json({
        succeded: false,
        error: { message: "Bu kullanici veya e mail kayitli" },
      });
    }
  }
};

const loginUser = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({
      message: "Bad request. Please add username and password in the request body",
    });
  }
  let foundUser = await User.findOne({ username });
  if (foundUser) {
    const isMatch = await bcrypt.compare(password, foundUser.password);
    if (isMatch) {
      const token = jwt.sign({ id: foundUser._id, username: foundUser.username }, process.env.JWT_SECRET, { expiresIn: "30d" });
      console.log(token);
      res.status(200).json({ message: "OK", token, foundUser });
      // res.cookie("jwt", token, { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 }).json({ message: "OK", token });
    } else {
      return res.status(400).json({ msg: "Bad password" });
    }
  } else {
    return res.status(400).json({ msg: "Bad credentails" });
  }
};
export { createUser, loginUser };
