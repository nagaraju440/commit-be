"use strict";
const participantData = [
    {
        id: 1,
        name: "Nagaraju",
        mobile: "8688696792",
        email: "balanagaraju 2506@gmail.com",
    },
    {
        id: 2,
        name: "Praveen",
        mobile: "8688696792",
        email: "balanagaraju 2506@gmail.com",
    },
    {
        id: 3,
        name: "Ganesh",
        mobile: "8688696792",
        email: "balanagaraju 2506@gmail.com",
    },
    {
        id: 4,
        name: "Sunil",
        mobile: "8688696792",
        email: "balanagaraju 2506@gmail.com",
    },
    {
        id: 5,
        name: "Bhuvanesh",
        mobile: "8688696792",
        email: "balanagaraju 2506@gmail.com",
    },
];

module.exports = {
    up: async (queryInterface, DataTypes) => {
        await queryInterface.bulkInsert("participant", participantData);
    },
    down: async (queryInterface, DataTypes) => {
        await queryInterface.bulkDelete("participant");
    },
};
