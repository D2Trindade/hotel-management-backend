'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Reservas', [
      {
        pessoa_id: 1,
        acomodacao_id: 16,
        servicosporpessoa_id: 1,
        previsaoCheckin: '2023-03-01',
        previsaoCheckout: '2023-03-02',
        qtdPessoas: 2,
        status: true,
        dataReserva: '2023-02-28',
        createdAt: new Date(),
				updatedAt: new Date()
      },
      {
        pessoa_id: 2,
        acomodacao_id: 17,
        servicosporpessoa_id: 2,
        previsaoCheckin: '2023-03-01',
        previsaoCheckout: '2023-03-02',
        qtdPessoas: 2,
        status: true,
        dataReserva: '2023-02-28',
        createdAt: new Date(),
				updatedAt: new Date()
      },
      {
        pessoa_id: 3,
        acomodacao_id: 17,
        servicosporpessoa_id: 3,
        previsaoCheckin: '2023-03-01',
        previsaoCheckout: '2023-03-02',
        qtdPessoas: 4,
        status: true,
        dataReserva: '2023-02-28',
        createdAt: new Date(),
				updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Reservas', null, {});
  }
};