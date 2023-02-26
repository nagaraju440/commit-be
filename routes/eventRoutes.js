const { getAllEvents } = require("../controllers/eventController");

const router = require("express").Router();
router.get("/", getAllEvents);
module.exports = router;
