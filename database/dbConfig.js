const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("database_name", "username", "password", {
  host: "localhost",
  dialect: "mysql",
});

// Tes koneksi ke database
sequelize
  .authenticate()
  .then(() => {
    console.log("Koneksi ke database berhasil");
  })
  .catch((error) => {
    console.error("Koneksi ke database gagal:", error);
  });

module.exports = sequelize;
