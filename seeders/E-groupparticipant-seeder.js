"use strict";

module.exports = {
    up: async (queryInterface, DataTypes) => {
        await queryInterface.bulkInsert("group_participant", groupParticipantData);
    },
    down: async (queryInterface, DataTypes) => {
        await queryInterface.bulkDelete("group_participant");
    },
};

var groupParticipantData = [
    {
        id: 1,
        group_id: 1,
        participant_id: 1,
    },
    {
        id: 2,
        group_id: 1,
        participant_id: 2,
    },
    {
        id: 3,
        group_id: 1,
        participant_id: 3,
    },
    {
        id: 4,
        group_id: 1,
        participant_id: 4,
    },
    {
        id: 5,
        group_id: 1,
        participant_id: 5,
    },
    {
        id: 6,
        group_id: 1,
        participant_id: 6,
    },
    {
        id: 7,
        group_id: 1,
        participant_id: 7,
    },
    {
        id: 8,
        group_id: 1,
        participant_id: 8,
    },
    {
        id: 9,
        group_id: 1,
        participant_id: 9,
    },
    {
        id: 10,
        group_id: 1,
        participant_id: 10,
    },
    {
        id: 11,
        group_id: 1,
        participant_id: 11,
    },
    {
        id: 12,
        group_id: 1,
        participant_id: 12,
    },
    {
        id: 13,
        group_id: 1,
        participant_id: 13,
    },
    {
        id: 14,
        group_id: 1,
        participant_id: 14,
    },
    {
        id: 15,
        group_id: 1,
        participant_id: 15,
    },
    {
        id: 16,
        group_id: 1,
        participant_id: 16,
    },
    {
        id: 17,
        group_id: 1,
        participant_id: 17,
    },
    {
        id: 18,
        group_id: 1,
        participant_id: 18,
    },
    {
        id: 19,
        group_id: 1,
        participant_id: 19,
    },
    {
        id: 20,
        group_id: 1,
        participant_id: 20,
    },
    {
        id: 21,
        group_id: 1,
        participant_id: 21,
    },
    {
        id: 22,
        group_id: 1,
        participant_id: 22,
    },
    {
        id: 23,
        group_id: 1,
        participant_id: 23,
    },
];
