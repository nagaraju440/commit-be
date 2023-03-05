const { getAllEvents, getEvent } = require("../controllers/eventController");

const router = require("express").Router();
router.get("/", getAllEvents);
router.get("/:id", getEvent);
module.exports = router;
