'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // await queryInterface.bulkInsert('nomeDaTabela', [{}], {}); /////MODELO
    await queryInterface.bulkInsert('Pessoas', [

      {
        nome: 'Ana Souza',
        ativo: true,
        email: 'ana@ana.com',
        role: 'usuario',
        createdAt: new Date(),
        updatedAt: new Date(),
        password: 'j45164ed5454f5465546f'
      },
      {
        nome: 'Marcos Cintra',
				ativo: true,
				email: 'marcos@marcos.com',
				role: 'usuario',
				createdAt: new Date(),
				updatedAt: new Date(),
        password: 'j45164ed454f5465546g'
      },
      {
        nome: 'Felipe Cardoso',
				ativo: true,
				email: 'felipe@felipe.com',
				role: 'usuario',
				createdAt: new Date(),
				updatedAt: new Date(),
        password: 'j45164ed5454f5465546h'
      },
      {
        nome: 'Sandra Gomes',
				ativo: false,
				email: 'sandra@sandra.com',
				role: 'usuario',
				createdAt: new Date(),
				updatedAt: new Date(),
        password: 'j45164ed5454f5465546i'
      },
      {
        nome: 'Paula Morais',
				ativo: true,
				email: 'paula@paula.com',
				role: 'usuario',
				createdAt: new Date(),
				updatedAt: new Date(),
        password: 'j45164ed5454f5465546j'
      },
      {
        nome: 'Sergio Lopes',
				ativo: true,
				email: 'sergio@sergio.com',
				role: 'usuario',
				createdAt: new Date(),
				updatedAt: new Date(),
        password: 'j45164ed5454f5465546k'
      },
      {
        nome: 'Aline Magalhães',
				ativo: true,
				email: 'alineM@granroyalhotel.com',
				role: 'funcionario',
				createdAt: new Date(),
				updatedAt: new Date(),
        password: 'j45164ed5454f5465546l'
      },
      {
        nome: 'Paulo Queiroz',
				ativo: true,
				email: 'pauloQ@granroyalhotel.com',
				role: 'funcionario',
				createdAt: new Date(),
				updatedAt: new Date(),
        password: 'j45164ed5454f5465546m'
      },
      {
        nome: 'Arnaldo Venâncio',
				ativo: true,
				email: 'arnaldoV@granroyalhotel.com',
				role: 'funcionario',
				createdAt: new Date(),
				updatedAt: new Date(),
        password: 'j45164ed5454f5465546n'
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Pessoas', null, {});
  }
};
//>npx sequelize-cli db:seed:all /////////Comando para mandar os dados para o banco