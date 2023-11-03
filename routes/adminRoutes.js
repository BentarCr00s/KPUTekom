const express = require("express");
const adminController = require("../controllers/adminController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/admin/login", adminController.login);
router.get("/admin/dashboard", authMiddleware, adminController.dashboard);

module.exports = router;
