'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ServicosAdicionaisReservados', [
      {
        pessoa_id: 1,
        servicoadicional_id: 1,
        status: true,
        quatidade: 2,
        createdAt: new Date(),
				updatedAt: new Date()
      },
      {
        pessoa_id: 1,
        servicoadicional_id: 3,
        status: true,
        quatidade: 1,
        createdAt: new Date(),
				updatedAt: new Date()
      },
      {
        pessoa_id: 2,
        servicoadicional_id: 4,
        status: true,
        quatidade: 2,
        createdAt: new Date(),
				updatedAt: new Date()
      },
      {
        pessoa_id: 3,
        servicoadicional_id: 1,
        status: true,
        quatidade: 1,
        createdAt: new Date(),
				updatedAt: new Date()
      }
      
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ServicosAdicionaisReservados', null, {});
  }
};