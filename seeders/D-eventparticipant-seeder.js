"use strict";

module.exports = {
    up: async (queryInterface, DataTypes) => {
        await queryInterface.bulkInsert("event_participant", eventParticipantData);
    },
    down: async (queryInterface, DataTypes) => {
        await queryInterface.bulkDelete("event_participant");
    },
};

var eventParticipantData = [
    {
        id: 1,
        event_id: 1,
        participant_id: 1,
    },
    {
        id: 2,
        event_id: 1,
        participant_id: 2,
    },
    {
        id: 3,
        event_id: 1,
        participant_id: 3,
    },
    {
        id: 4,
        event_id: 1,
        participant_id: 4,
    },
    {
        id: 5,
        event_id: 1,
        participant_id: 5,
    },
    {
        id: 6,
        event_id: 1,
        participant_id: 6,
    },
    {
        id: 7,
        event_id: 1,
        participant_id: 7,
    },
    {
        id: 8,
        event_id: 1,
        participant_id: 8,
    },
    {
        id: 9,
        event_id: 1,
        participant_id: 9,
    },
    {
        id: 10,
        event_id: 1,
        participant_id: 10,
    },
    {
        id: 11,
        event_id: 1,
        participant_id: 11,
    },
    {
        id: 12,
        event_id: 1,
        participant_id: 12,
    },
    {
        id: 13,
        event_id: 1,
        participant_id: 13,
    },
    {
        id: 14,
        event_id: 1,
        participant_id: 14,
    },
    {
        id: 15,
        event_id: 1,
        participant_id: 15,
    },
    {
        id: 16,
        event_id: 1,
        participant_id: 16,
    },
    {
        id: 17,
        event_id: 1,
        participant_id: 17,
    },
    {
        id: 18,
        event_id: 1,
        participant_id: 18,
    },
    {
        id: 19,
        event_id: 1,
        participant_id: 19,
    },
    {
        id: 20,
        event_id: 1,
        participant_id: 20,
    },
    {
        id: 21,
        event_id: 1,
        participant_id: 21,
    },
    {
        id: 22,
        event_id: 1,
        participant_id: 22,
    },
    {
        id: 23,
        event_id: 1,
        participant_id: 23,
    },
    {
        id: 24,
        event_id: 2,
        participant_id: 1,
    },
    {
        id: 25,
        event_id: 2,
        participant_id: 2,
    },
    {
        id: 26,
        event_id: 2,
        participant_id: 3,
    },
    {
        id: 27,
        event_id: 2,
        participant_id: 4,
    },
    {
        id: 28,
        event_id: 2,
        participant_id: 5,
    },
    {
        id: 29,
        event_id: 2,
        participant_id: 6,
    },
    {
        id: 30,
        event_id: 2,
        participant_id: 7,
    },
    {
        id: 31,
        event_id: 2,
        participant_id: 8,
    },
    {
        id: 32,
        event_id: 2,
        participant_id: 9,
    },
    {
        id: 33,
        event_id: 2,
        participant_id: 10,
    },
    {
        id: 34,
        event_id: 2,
        participant_id: 11,
    },
    {
        id: 35,
        event_id: 2,
        participant_id: 12,
    },
    {
        id: 36,
        event_id: 2,
        participant_id: 13,
    },
    {
        id: 37,
        event_id: 2,
        participant_id: 14,
    },
    {
        id: 38,
        event_id: 2,
        participant_id: 15,
    },
    {
        id: 39,
        event_id: 2,
        participant_id: 16,
    },
    {
        id: 40,
        event_id: 2,
        participant_id: 17,
    },
    {
        id: 41,
        event_id: 2,
        participant_id: 18,
    },
    {
        id: 42,
        event_id: 2,
        participant_id: 19,
    },
    {
        id: 43,
        event_id: 2,
        participant_id: 20,
    },
    {
        id: 44,
        event_id: 2,
        participant_id: 21,
    },
    {
        id: 45,
        event_id: 2,
        participant_id: 22,
    },
    {
        id: 46,
        event_id: 2,
        participant_id: 23,
    },
    {
        id: 47,
        event_id: 3,
        participant_id: 1,
    },
    {
        id: 48,
        event_id: 3,
        participant_id: 2,
    },
    {
        id: 49,
        event_id: 3,
        participant_id: 3,
    },
    {
        id: 50,
        event_id: 3,
        participant_id: 4,
    },
    {
        id: 51,
        event_id: 3,
        participant_id: 5,
    },
    {
        id: 52,
        event_id: 3,
        participant_id: 6,
    },
    {
        id: 53,
        event_id: 3,
        participant_id: 7,
    },
    {
        id: 54,
        event_id: 3,
        participant_id: 8,
    },
    {
        id: 55,
        event_id: 3,
        participant_id: 9,
    },
    {
        id: 56,
        event_id: 3,
        participant_id: 10,
    },
    {
        id: 57,
        event_id: 3,
        participant_id: 11,
    },
    {
        id: 58,
        event_id: 3,
        participant_id: 12,
    },
    {
        id: 59,
        event_id: 3,
        participant_id: 13,
    },
    {
        id: 60,
        event_id: 3,
        participant_id: 14,
    },
    {
        id: 61,
        event_id: 3,
        participant_id: 15,
    },
    {
        id: 62,
        event_id: 3,
        participant_id: 16,
    },
    {
        id: 63,
        event_id: 3,
        participant_id: 17,
    },
    {
        id: 64,
        event_id: 3,
        participant_id: 18,
    },
    {
        id: 65,
        event_id: 3,
        participant_id: 19,
    },
    {
        id: 66,
        event_id: 3,
        participant_id: 20,
    },
    {
        id: 67,
        event_id: 3,
        participant_id: 21,
    },
    {
        id: 68,
        event_id: 3,
        participant_id: 22,
    },
    {
        id: 69,
        event_id: 3,
        participant_id: 23,
    },
];
