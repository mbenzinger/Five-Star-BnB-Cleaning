'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('properties', {
            property_id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            property_name: {
                type: Sequelize.STRING
            },
            address: {
                type: Sequelize.STRING
            },
            state: {
                type: Sequelize.STRING
            },
            square_feet: {
                type: Sequelize.NUMBER
            },
            pic: {
                type: Sequelize.STRING
            },
            created_at: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updated_at: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('users');
    }
};