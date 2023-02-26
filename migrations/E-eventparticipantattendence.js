"use strict";

module.exports = {
    up: async (queryInterface, DataTypes) => {
        await queryInterface.createTable("event_participant_attendence", {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true,
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
            createdAt: {
                allowNull: false,
                type: DataTypes.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: DataTypes.DATE,
            },
        });
    },
    down: async (queryInterface, DataTypes) => {
        await queryInterface.dropTable("event_participant_attendence");
    },
};
