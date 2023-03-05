"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class GroupParticipant extends Model {
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
            this.belongsTo(models.Participant, {
                foreignKey: {
                    name: "participant_id",
                    allowNull: false,
                },
                as: "Participant",
            });
        }
    }
    GroupParticipant.init(
        {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            group_id: {
                type: DataTypes.INTEGER,
            },
            participant_id: {
                type: DataTypes.INTEGER,
            },
        },
        {
            sequelize,
            modelName: "GroupParticipant",
            tableName: "group_participant",
        }
    );
    return GroupParticipant;
};
