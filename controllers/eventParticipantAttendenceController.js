const { EventParticipantAttendence, EventParticipant } = require("../models");

const getAllEventParticipantAttendence = async (req, res, next) => {
    try {
        const { event_id, date } = req.query;
        const response = await EventParticipantAttendence.findAll({
            where: { event_id: event_id, date: date },
        });
        if (response.length == 0) {
            let EventParticipantData = await EventParticipant.findAll({
                where: { event_id: event_id },
                attributes: ["event_id", "participant_id"],
            });
            EventParticipantData = EventParticipantData.map(item => {
                return { event_id: item?.event_id, participant_id: item.participant_id, date };
            });
            await EventParticipantAttendence.bulkCreate(EventParticipantData);
            // console.log(EventParticipantData.m);
        }
        const afterResponse = await EventParticipantAttendence.findAll({
            where: { event_id: event_id, date: date },
        });
        return res.status(200).json({
            status: "success",
            data: afterResponse,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            status: "error",
            message: "Something went wrong!",
        });
    }
};

module.exports = { getAllEventParticipantAttendence };
