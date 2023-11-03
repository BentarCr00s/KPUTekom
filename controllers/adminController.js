const jwt = require("jsonwebtoken");

const login = (req, res) => {
  const { username, password } = req.body;

  // Melakukan autentikasi admin berdasarkan username dan password
  if (username === "admin" && password === "admin123") {
    // Jika autentikasi berhasil, buat token
    const token = jwt.sign({ username: "admin" }, "secret_key");
    res.json({ token });
  } else {
    res.status(401).json({ message: "Invalid username or password" });
  }
};

const dashboard = (req, res) => {
  res.json({ message: "Welcome to the admin dashboard" });
};

module.exports = {
  login,
  dashboard,
};
const createCandidate = (req, res) => {
  const { name, party, position } = req.body;

  // Buat kandidat baru berdasarkan data yang diterima
  // ...

  res.json({ message: "Candidate created" });
};

const getAllCandidates = (req, res) => {
  // Dapatkan semua kandidat dari database atau sumber data lainnya
  // ...

  res.json({ candidates });
};

module.exports = {
  createCandidate,
  getAllCandidates,
};
