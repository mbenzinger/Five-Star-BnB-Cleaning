'use strict';
const bcrypt = require('bcrypt')
require('dotenv').config()

module.exports = {
    up: async (queryInterface, Sequelize) => {

        await queryInterface.bulkInsert('users', [{
            first_name: 'John',
            last_name: 'Doe',
            email: 'john.doe@example.com',
            role: 'admin',
            password_digest: await bcrypt.hash(process.env.ADMIN_PASSWORD, 10),
            created_at: new Date(),
            updated_at: new Date()
        },
        {
            first_name: 'John',
            last_name: 'Moe',
            email: 'john.moe@example.com',
            role: 'Property Owner',
            password_digest: await bcrypt.hash(process.env.ADMIN_PASSWORD, 10),
            created_at: new Date(),
            updated_at: new Date()
        },
        {
            first_name: 'Becky',
            last_name: 'Joe',
            email: 'becky.joe@example.com',
            role: 'Sub Contractor',
            password_digest: await bcrypt.hash(process.env.ADMIN_PASSWORD, 10),
            created_at: new Date(),
            updated_at: new Date()
        }]
        )

        const [users] = await queryInterface.sequelize.query(
            `SELECT user_id from users LIMIT 1;`
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
