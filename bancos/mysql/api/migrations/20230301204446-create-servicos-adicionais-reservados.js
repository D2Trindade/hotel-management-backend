'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ServicosAdicionaisReservados', {
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
      servicoadicional_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'ServicosAdicionais', key: 'id'}
      },
      status: {
        type: Sequelize.BOOLEAN
      },
      quatidade: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('ServicosAdicionaisReservados');
  }
};