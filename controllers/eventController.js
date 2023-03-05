const { Event } = require("../models");

const getAllEvents = async (req, res, next) => {
    const { group_id = 1 } = req.query;
    try {
        const events = await Event.findAll({
            where: { group_id: group_id },
        });
        return res.status(200).json({
            status: "success",
            data: events,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            status: "error",
            message: "Something went wrong!",
        });
    }
};

const getEvent = async (req, res) => {
    const { id } = req.params;
    try {
        const EventData = await Event.findOne({
            where: { id: id },
        });
        return res.status(200).json({
            status: "success",
            data: EventData,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            status: "error",
            message: "Something went wrong!",
        });
    }
};
module.exports = { getAllEvents, getEvent };
