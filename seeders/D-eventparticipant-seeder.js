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
        event_id: 2,
        participant_id: 1,
    },
    {
        id: 7,
        event_id: 2,
        participant_id: 2,
    },
    {
        id: 8,
        event_id: 2,
        participant_id: 3,
    },
    {
        id: 9,
        event_id: 2,
        participant_id: 4,
    },
    {
        id: 10,
        event_id: 2,
        participant_id: 5,
    },
    {
        id: 11,
        event_id: 3,
        participant_id: 1,
    },
    {
        id: 12,
        event_id: 3,
        participant_id: 2,
    },
    {
        id: 13,
        event_id: 3,
        participant_id: 3,
    },
    {
        id: 14,
        event_id: 3,
        participant_id: 4,
    },
    {
        id: 15,
        event_id: 3,
        participant_id: 5,
    },
];
