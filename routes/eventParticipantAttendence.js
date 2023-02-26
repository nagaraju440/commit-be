const { getAllEventParticipantAttendence } = require("../controllers/eventParticipantAttendenceController");

const router = require("express").Router();
router.get("/", getAllEventParticipantAttendence);
module.exports = router;
