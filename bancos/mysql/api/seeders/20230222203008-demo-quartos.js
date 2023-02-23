'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Quartos', [
      {
        numero_quarto: 42,
        acomodacao_id: 7,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        numero_quarto: 43,
        acomodacao_id: 7,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        numero_quarto: 44,
        acomodacao_id: 7,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        numero_quarto: 45,
        acomodacao_id: 7,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        numero_quarto: 46,
        acomodacao_id: 7,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        numero_quarto: 47,
        acomodacao_id: 7,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        numero_quarto: 48,
        acomodacao_id: 7,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        numero_quarto: 49,
        acomodacao_id: 7,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        numero_quarto: 50,
        acomodacao_id: 7,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        numero_quarto: 51,
        acomodacao_id: 7,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        numero_quarto: 52,
        acomodacao_id: 7,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        numero_quarto: 53,
        acomodacao_id: 7,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        numero_quarto: 54,
        acomodacao_id: 7,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        numero_quarto: 55,
        acomodacao_id: 7,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        numero_quarto: 56,
        acomodacao_id: 7,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        numero_quarto: 57,
        acomodacao_id: 7,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        numero_quarto: 58,
        acomodacao_id: 8,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        numero_quarto: 59,
        acomodacao_id: 8,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        numero_quarto: 60,
        acomodacao_id: 8,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        numero_quarto: 61,
        acomodacao_id: 8,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        numero_quarto: 62,
        acomodacao_id: 8,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        numero_quarto: 63,
        acomodacao_id: 8,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        numero_quarto: 64,
        acomodacao_id: 8,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        numero_quarto: 65,
        acomodacao_id: 8,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        numero_quarto: 66,
        acomodacao_id: 8,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        numero_quarto: 67,
        acomodacao_id: 8,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        numero_quarto: 68,
        acomodacao_id: 8,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        numero_quarto: 69,
        acomodacao_id: 9,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        numero_quarto: 70,
        acomodacao_id: 9,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        numero_quarto: 71,
        acomodacao_id: 9,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        numero_quarto: 72,
        acomodacao_id: 9,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        numero_quarto: 73,
        acomodacao_id: 9,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
