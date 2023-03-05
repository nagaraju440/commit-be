"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class EventByDateStatus extends Model {
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
        }
    }
    EventByDateStatus.init(
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
            date: {
                type: DataTypes.STRING,
            },
            is_taken: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
        },
        {
            sequelize,
            modelName: "EventByDateStatus",
            tableName: "event_date_status",
        }
    );
    return EventByDateStatus;
};
