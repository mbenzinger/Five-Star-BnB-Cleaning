'use strict';
const bcrypt = require('bcrypt')
require('dotenv').config()

module.exports = {
    up: async (queryInterface, Sequelize) => {
console.log("log from seed file")
        await queryInterface.bulkInsert('users', [{
            first_name: 'John',
            last_name: 'Doe',
            email: 'john.doe@example.com',
            role: 'admin',
            password: await bcrypt.hash(process.env.ADMIN_PASSWORD, 10),
            created_at: new Date(),
            updated_at: new Date()
        },
        {
            first_name: 'John',
            last_name: 'Moe',
            email: 'john.moe@example.com',
            role: 'Property Owner',
            password: await bcrypt.hash(process.env.ADMIN_PASSWORD, 10),
            created_at: new Date(),
            updated_at: new Date()
        },
        {
            first_name: 'Becky',
            last_name: 'Joe',
            email: 'becky.joe@example.com',
            role: 'Sub Contractor',
            password: await bcrypt.hash(process.env.ADMIN_PASSWORD, 10),
            created_at: new Date(),
            updated_at: new Date()
        }]
        )
console.log("second log from seed")
        const [users] = await queryInterface.sequelize.query(
            `SELECT userId from users LIMIT 1;`
        );

        await queryInterface.bulkInsert('places', [
            {
                placeId: places[0].placeId,
                userId: users[1].userId,
                name: 'Home by the Sea',
                address: '1234 Sea Shore Bluff Drive',
                city: 'Seattle',
                state: 'WA',
                square_feet: 1325,
                pic: `${process.env.REACT_APP_SERVER_URL}/images/home-by-the-sea.jpg`,
                created_at: new Date(),
                updated_at: new Date()
            }
        ])

        const [places] = await queryInterface.sequelize.query(
            `SELECT placeId from places LIMIT 1;`
        );
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('users', null, {});
        await queryInterface.bulkDelete('places', null, {});
    }
};
