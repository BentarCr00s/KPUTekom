const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/userModel");

const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Cari user berdasarkan username
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    // Verifikasi password
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    // Buat token JWT
    const token = jwt.sign({ userId: user._id }, "secret_key");

    // atau
    localStorage.setItem("token", token); // Jika menggunakan localStorage

    res.json({ message: "Login successful", token });
  } catch (error) {
    res.status(500).json({ message: "Failed to login", error: error.message });
  }
};

const logout = (req, res) => {
  // Hapus token dari client-side storage
  // atau
  localStorage.removeItem("token"); // Jika menggunakan localStorage

  res.json({ message: "Logout successful" });
};

module.exports = {
  login,
  logout,
};
