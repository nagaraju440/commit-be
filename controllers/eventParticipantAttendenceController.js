const { EventParticipantAttendence, EventParticipant, EventByDateStatus, Participant, Event } = require("../models");

const getAllEventParticipantAttendence = async (req, res, next) => {
    try {
        const { event_id, date } = req.query;

        const EventByDateStatusObj = await EventByDateStatus.findOne({
            where: { event_id, date },
        });

        if (!EventByDateStatusObj) {
            console.log("row was not existed", EventByDateStatusObj);

            await EventByDateStatus.create({ event_id, date });

            let EventParticipantData = await EventParticipant.findAll({
                where: { event_id: event_id },
                attributes: ["event_id", "participant_id"],
            });

            EventParticipantData = EventParticipantData.map(item => {
                return { ...item.dataValues, date };
            });

            await EventParticipantAttendence.bulkCreate(EventParticipantData);
        } else {
            console.log("row was existed", EventByDateStatusObj);
        }

        const { is_taken } = await EventByDateStatus.findOne({
            where: { event_id, date },
            attributes: ["is_taken"],
        });

        const EventParticipantAttendenceData = await EventParticipantAttendence.findAll({
            where: { event_id, date },
            include: [{ model: Participant, attributes: ["name", "mobile"] }],
        });
        const EventData = await Event.findOne({ where: { id: event_id } });
        return res.status(200).json({
            status: "success",
            data: {
                data: EventParticipantAttendenceData,
                is_taken,
                eventData: EventData,
            },
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            status: "error",
            message: "Something went wrong!",
        });
    }
};

const patchAllEventParticipantAttendence = async (req, res) => {
    const { data, event_id, date } = req.body;
    console.log("data to be modify is", data);
    try {
        await EventParticipantAttendence.bulkCreate(data, { updateOnDuplicate: ["is_attended", "reason"] });
        await EventByDateStatus.update({ is_taken: true }, { where: { event_id: event_id, date: date } });
        return res.status(200).json({
            status: "success",
            data: "Successfully updated the data",
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            status: "error",
            message: "Something went wrong!",
        });
    }
};

module.exports = { getAllEventParticipantAttendence, patchAllEventParticipantAttendence };
