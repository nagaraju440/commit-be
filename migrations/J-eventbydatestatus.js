"use strict";

module.exports = {
    up: async (queryInterface, DataTypes) => {
        await queryInterface.createTable("event_date_status", {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true,
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
        await queryInterface.dropTable("event_date_status");
    },
};
