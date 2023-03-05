"use strict";
const participantData = [
    {
        id: 1,
        name: "Manosmi",
        mobile: "8688696792",
        email: "balanagaraju 2506@gmail.com",
    },
    {
        id: 2,
        name: "Bhargavi",
        mobile: "8688696792",
        email: "balanagaraju 2506@gmail.com",
    },
    {
        id: 3,
        name: "Uman",
        mobile: "8688696792",
        email: "balanagaraju 2506@gmail.com",
    },
    {
        id: 4,
        name: "Jhansi",
        mobile: "8688696792",
        email: "balanagaraju 2506@gmail.com",
    },
    {
        id: 5,
        name: "Nagaraju",
        mobile: "8688696792",
        email: "balanagaraju 2506@gmail.com",
    },
    {
        id: 6,
        name: "Ajay",
        mobile: "8688696792",
        email: "balanagaraju 2506@gmail.com",
    },
    {
        id: 7,
        name: "Sunil",
        mobile: "8688696792",
        email: "balanagaraju 2506@gmail.com",
    },
    {
        id: 8,
        name: "Supraja",
        mobile: "8688696792",
        email: "balanagaraju 2506@gmail.com",
    },
    {
        id: 9,
        name: "Pranathi",
        mobile: "8688696792",
        email: "balanagaraju 2506@gmail.com",
    },
    {
        id: 10,
        name: "Tejaswini",
        mobile: "8688696792",
        email: "balanagaraju 2506@gmail.com",
    },
    {
        id: 11,
        name: "Karthik",
        mobile: "8688696792",
        email: "balanagaraju 2506@gmail.com",
    },
    {
        id: 12,
        name: "Haripriya",
        mobile: "8688696792",
        email: "balanagaraju 2506@gmail.com",
    },
    {
        id: 13,
        name: "Bhargav",
        mobile: "8688696792",
        email: "balanagaraju 2506@gmail.com",
    },
    {
        id: 14,
        name: "Praveen",
        mobile: "8688696792",
        email: "balanagaraju 2506@gmail.com",
    },
    {
        id: 15,
        name: "Ganesh",
        mobile: "8688696792",
        email: "balanagaraju 2506@gmail.com",
    },
    {
        id: 16,
        name: "Bhuvanesh",
        mobile: "8688696792",
        email: "balanagaraju 2506@gmail.com",
    },
    {
        id: 17,
        name: "Gayatri",
        mobile: "8688696792",
        email: "balanagaraju 2506@gmail.com",
    },
    {
        id: 18,
        name: "Venkatesh",
        mobile: "8688696792",
        email: "balanagaraju 2506@gmail.com",
    },
    {
        id: 19,
        name: "Pavani",
        mobile: "8688696792",
        email: "balanagaraju 2506@gmail.com",
    },
    {
        id: 20,
        name: "Madhuri",
        mobile: "8688696792",
        email: "balanagaraju 2506@gmail.com",
    },
    {
        id: 21,
        name: "Dipika",
        mobile: "8688696792",
        email: "balanagaraju 2506@gmail.com",
    },
    {
        id: 22,
        name: "Vamsi",
        mobile: "8688696792",
        email: "balanagaraju 2506@gmail.com",
    },
    {
        id: 23,
        name: "Sumit",
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
