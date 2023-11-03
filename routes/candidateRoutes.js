const express = require("express");
const candidateController = require("../controllers/candidateController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/candidates", candidateController.getAllCandidates);
router.post("/candidate", authMiddleware, candidateController.createCandidate);

module.exports = router;
