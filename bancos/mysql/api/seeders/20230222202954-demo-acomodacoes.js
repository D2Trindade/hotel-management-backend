'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Acomodacoes', [
      {
        tipo: 'Standard',
        descricao_acomodacoes: 'Com 60 m², nossas suítes Standard...',
        preco: 190.00,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        tipo: 'Luxo',
        descricao_acomodacoes: 'Com 90 m², nossas suítes Luxo...',
        preco: 250.00,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        tipo: 'Presidencial',
        descricao_acomodacoes: 'Com 160 m², nossas suítes Presidenciais ...',
        preco: 400.00,
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
