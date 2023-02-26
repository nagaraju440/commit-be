"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class EventParticipantAttendence extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // this.belongsTo(models.Event, {
            //     foreignKey: {
            //         name: "event_id",
            //         allowNull: false,
            //     },
            //     as: "Event",
            // });
            // this.belongsTo(models.Participant, {
            //     foreignKey: {
            //         name: "participant_id",
            //         allowNull: false,
            //     },
            //     as: "Participant",
            // });
        }
    }
    EventParticipantAttendence.init(
        {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            date: {
                type: DataTypes.STRING,
            },
            event_id: {
                type: DataTypes.INTEGER,
            },
            participant_id: {
                type: DataTypes.INTEGER,
            },
            is_attended: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            },
            reason: {
                type: DataTypes.STRING,
            },
        },
        {
            sequelize,
            modelName: "EventParticipantAttendence",
            tableName: "event_participant_attendence",
        }
    );
    return EventParticipantAttendence;
};
