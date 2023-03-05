const router = require("express").Router();
const eventRoutes = require("./eventRoutes");
const eventParticipantAttendenceRoutes = require("./eventParticipantAttendence");
const participantRoutes = require("./participantRoutes");
router.use("/events", eventRoutes);
router.use("/event-participant-attendence", eventParticipantAttendenceRoutes);
router.use("/participants", participantRoutes);
module.exports = router;
