const { getAllParticipants } = require("../controllers/participantController");

const router = require("express").Router();
router.get("/", getAllParticipants);
module.exports = router;
