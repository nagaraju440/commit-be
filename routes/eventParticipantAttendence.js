const {
    getAllEventParticipantAttendence,
    patchAllEventParticipantAttendence,
} = require("../controllers/eventParticipantAttendenceController");

const router = require("express").Router();
router.get("/", getAllEventParticipantAttendence);
router.patch('/',patchAllEventParticipantAttendence);
module.exports = router;
