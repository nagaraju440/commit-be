const router = require("express").Router();
const eventRoutes = require("./eventRoutes");
const eventParticipantAttendenceRoutes = require("./eventParticipantAttendence");
router.use("/events", eventRoutes);
router.use("/event-particpant-attendence", eventParticipantAttendenceRoutes);
module.exports = router;
