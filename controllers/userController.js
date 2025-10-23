const User = require("../models/User");

exports.getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createUser = async (req, res) => {
  try {
    const { name, email, nomorTelepon, statusAktif, departemen } = req.body;
    const newUser = await User.create({
      name,
      email,
      nomorTelepon,
      statusAktif,
      departemen,
    });
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
