"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class EventParticipant extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            this.belongsTo(models.Event, {
                foreignKey: {
                    name: "event_id",
                    allowNull: false,
                },
                as: "Event",
            });
            this.belongsTo(models.Participant, {
                foreignKey: {
                    name: "participant_id",
                    allowNull: false,
                },
                as: "Participant",
            });
        }
    }
    EventParticipant.init(
        {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            event_id: {
                type: DataTypes.INTEGER,
            },
            participant_id: {
                type: DataTypes.INTEGER,
            },
        },
        {
            sequelize,
            modelName: "EventParticipant",
            tableName: "event_participant",
        }
    );
    return EventParticipant;
};
