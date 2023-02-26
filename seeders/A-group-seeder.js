"use strict";
const groupData = [
    {
        id: 1,
        name: "GITA CAMPUS GROUP",
    },
];

module.exports = {
    up: async (queryInterface, DataTypes) => {
        await queryInterface.bulkInsert("group", groupData);
    },
    down: async (queryInterface, DataTypes) => {
        await queryInterface.bulkDelete("group");
    },
};
