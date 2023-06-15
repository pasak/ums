'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     */
    await queryInterface.createTable('users', { 
      id: {
          type:           Sequelize.INTEGER(11),
          allowNull:      false,
          primaryKey:     true,
          autoIncrement:  true
      }, 
      name: {
          type:           Sequelize.STRING,
          allowNull:      false,
          unique:         false
      }, 
      email: {
          type:           Sequelize.STRING,
          allowNull:      false,
          unique:         false
      }, 
      telephone: {
          type:           Sequelize.STRING,
          allowNull:      false,
          unique:         false
      },
      createdAt:  Sequelize.DATE,
      updatedAt:  Sequelize.DATE
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     */
    await queryInterface.dropTable('users');
  }
};
