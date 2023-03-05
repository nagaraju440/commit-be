"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Event extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            this.belongsTo(models.Group, {
                foreignKey: {
                    name: "group_id",
                    allowNull: false,
                },
                as: "Group",
            });
            this.belongsToMany(models.Participant, {
                through: "event_participant",
                foreignKey: {
                    name: "event_id",
                },
                as: "Participant",
            });
            this.hasMany(models.EventParticipantAttendence, {
                foreignKey: {
                    name: "event_id",
                    allowNull: false,
                },
                as: "EventParticipantAttendence",
            });
        }
    }
    Event.init(
        {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            name: {
                type: DataTypes.STRING,
                unique: true,
                allowNull: false,
            },
            group_id: {
                type: DataTypes.INTEGER,
            },
            event_time: {
                type: DataTypes.STRING,
            },
            image_link: {
                type: DataTypes.STRING,
            },
        },
        {
            sequelize,
            modelName: "Event",
            tableName: "event",
        }
    );
    return Event;
};
