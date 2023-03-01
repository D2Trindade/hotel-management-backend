'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ServicosPorPessoas', [
      {
        pessoa_id: 1,
        valorTotal: 390.00,
        createdAt: new Date(),
				updatedAt: new Date()
      },
      {
        pessoa_id: 2,
        valorTotal: 200.00,
        createdAt: new Date(),
				updatedAt: new Date()
      },
      {
        pessoa_id: 3,
        valorTotal: 100.00,
        createdAt: new Date(),
				updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ServicosPorPessoas', null, {});
  }
};
