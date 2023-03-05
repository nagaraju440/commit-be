const { GroupParticipant, Participant } = require("../models");

const getAllParticipants = async (req, res, next) => {
    const { group_id = 1 } = req.query;
    try {
        const participantDataByGroupId = await GroupParticipant.findAll({
            where: { group_id: group_id },
        });
        const participantIds = participantDataByGroupId.map(item => {
            return item.dataValues.participant_id;
        });
        const participants = await Participant.findAll({
            where: { id: participantIds },
        });
        return res.status(200).json({
            status: "success",
            data: participants,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            status: "error",
            message: "Something went wrong!",
        });
    }
};
module.exports = { getAllParticipants };
