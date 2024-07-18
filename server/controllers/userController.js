import User from "../models/User.js";
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

export { createUser };
