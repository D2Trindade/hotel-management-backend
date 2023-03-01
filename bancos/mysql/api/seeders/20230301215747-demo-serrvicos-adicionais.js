'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ServicosAdicionais', [
      {
        nome: 'Academia',
        descricao: 'Serviço de academia com reservas antecipadas de horário e Personal exclusivo',
        status: true,
        preco: 100.00,
        createdAt: new Date(),
				updatedAt: new Date()
      },
      {
        nome: 'Early check-in/Late Check-in',
        descricao: 'Serviço de checkin ou checkout fora do horário comercial',
        status: true,
        preco: 50.00,
        createdAt: new Date(),
				updatedAt: new Date()
      },
      {
        nome: 'Café da manhã',
        descricao: 'Café da manhã servido no quarto em qualquer horário',
        status: true,
        preco: 190.00,
        createdAt: new Date(),
				updatedAt: new Date()
      },
      {
        nome: 'Serviço de lavanderia',
        descricao: 'Lavanderia disponível a qualquer horário',
        status: true,
        preco: 100.00,
        createdAt: new Date(),
				updatedAt: new Date()
      },
      {
        nome: 'Serviço de spa',
        descricao: 'Spa reservado durante toda a estadia',
        status: true,
        preco: 250.00,
        createdAt: new Date(),
				updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ServicosAdicionais', null, {});
  }
};
