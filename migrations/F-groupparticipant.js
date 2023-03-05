"use strict";

module.exports = {
    up: async (queryInterface, DataTypes) => {
        await queryInterface.createTable("group_participant", {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true,
            },
            group_id: {
                type: DataTypes.INTEGER,
            },
            participant_id: {
                type: DataTypes.INTEGER,
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
        await queryInterface.dropTable("group_participant");
    },
};
