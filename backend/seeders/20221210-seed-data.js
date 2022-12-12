'use strict';
require('dotenv').config()

module.exports = {
    up: async (queryInterface, Sequelize) => {

        await queryInterface.bulkInsert('users', [{
            first_name: 'John',
            last_name: 'Doe',
            email: 'john.doe@example.com',
            userType: 'admin',
            created_at: new Date(),
            updated_at: new Date()
        },
        {
            first_name: 'John',
            last_name: 'Moe',
            email: 'john.moe@example.com',
            userType: 'Property Owner',
            created_at: new Date(),
            updated_at: new Date()
        },
        {
            first_name: 'Becky',
            last_name: 'Joe',
            email: 'becky.joe@example.com',
            userType: 'Sub Contractor',
            created_at: new Date(),
            updated_at: new Date()
        }]
        )

        const [users] = await queryInterface.sequelize.query(
            `SELECT user_id from users LIMIT 1;`
        );

        await queryInterface.bulkInsert('properties', [
            {
                property_name: 'Home by the Sea',
                address: '1234 Sea Shore Bluff Drive',
                city: 'Seattle',
                state: 'WA',
                square_feet: 1325,
                pic: `${process.env.REACT_APP_SERVER_URL}/images/home-by-the-sea.jpg`,
                created_at: new Date(),
                updated_at: new Date()
            }
        ])

        const [properties] = await queryInterface.sequelize.query(
            `SELECT property_id from properties LIMIT 1;`
        );
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('users', null, {});
        await queryInterface.bulkDelete('properties', null, {});
    }
};
