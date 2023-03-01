'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Reservas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      pessoa_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Pessoas', key: 'id'}
      },
      acomodacao_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Acomodacoes', key: 'id'}
      },
      servicosporpessoa_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'ServicosPorPessoas', key: 'id'}
      },
      previsaoCheckin: {
        type: Sequelize.DATEONLY
      },
      previsaoCheckout: {
        type: Sequelize.DATEONLY
      },
      qtdPessoas: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.BOOLEAN
      },
      dataReserva: {
        type: Sequelize.DATEONLY
      },
      deletedAt: {
        type: Sequelize.DATEONLY
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Reservas');
  }
};