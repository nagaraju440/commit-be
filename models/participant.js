"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Participant extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            this.belongsToMany(models.Event, {
                through: "event_participant",
                foreignKey: {
                    name: "participant_id",
                },
                as: "Event",
            });
        }
    }
    Participant.init(
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
            mobile: {
                type: DataTypes.STRING,
            },
            email: {
                type: DataTypes.STRING,
            },
        },
        {
            sequelize,
            modelName: "Participant",
            tableName: "participant",
        }
    );
    return Participant;
};
