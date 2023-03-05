"use strict";
const eventData = [
    {
        id: 1,
        name: "Group Sadhana",
        group_id: 1,
        event_time: "07:00",
        image_link:
            "https://static.vecteezy.com/system/resources/previews/003/584/008/non_2x/yoga-class-group-of-people-in-the-studio-practicing-yoga-with-the-yoga-instructor-illustration-vector.jpg",
    },
    {
        id: 2,
        name: "Meditation",
        group_id: 1,
        event_time: "12:30",
        image_link:
            "https://img.freepik.com/premium-vector/yogi-men-women-meditate-large-hall-sitting-lotus-posture-male-female-characters-yoga-class-doing-sport-activities-healthy-lifestyle-mind-balance-cartoon-vector-illustration_1016-11495.jpg?w=2000",
    },
    {
        id: 3,
        name: "Satsung",
        group_id: 1,
        event_time: "17:30",
        image_link: "https://resources.tidal.com/images/eac46fc0/3109/49f1/a252/6fb4d658b912/640x640.jpg",
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
