const Candidate = require("../models/candidateModel");

const createCandidate = async (req, res) => {
  const { name, visi, misi, noUrut } = req.body;

  try {
    const candidate = new Candidate({
      name,
      visi,
      misi,
      noUrut,
    });

    await candidate.save();

    res.json({ message: "Candidate created", candidate });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to create candidate", error: error.message });
  }
};

const getAllCandidates = async (req, res) => {
  try {
    const candidates = await Candidate.find();

    res.json({ candidates });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to get candidates", error: error.message });
  }
};

module.exports = {
  createCandidate,
  getAllCandidates,
};
