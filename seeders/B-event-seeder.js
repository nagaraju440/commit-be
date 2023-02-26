"use strict";
const eventData = [
    {
        id: 1,
        name: "Group Sadhana",
        group_id: 1,
        event_time: "07:00",
    },
    {
        id: 2,
        name: "Meditation",
        group_id: 1,
        event_time: "12:30",
    },
    {
        id: 3,
        name: "Satsung",
        group_id: 1,
        event_time: "17:30",
    },
];

module.exports = {
    up: async (queryInterface, DataTypes) => {
        await queryInterface.bulkInsert("event", eventData);
    },
    down: async (queryInterface, DataTypes) => {
        await queryInterface.bulkDelete("event");
    },
};
