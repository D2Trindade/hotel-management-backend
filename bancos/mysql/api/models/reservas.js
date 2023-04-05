'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reservas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Reservas.belongsTo(models.ServicosPorPessoas, {foreignKey: 'servicosporpessoa_id'})
      Reservas.belongsTo(models.Pessoas, {foreignKey: 'pessoa_id'})
      Reservas.belongsTo(models.Acomodacoes, {foreignKey: 'acomodacao_id'})
    }
  }
  Reservas.init({
    previsaoCheckin: DataTypes.DATEONLY,
    previsaoCheckout: DataTypes.DATEONLY,
    qtdPessoas: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN,
    dataReserva: DataTypes.DATEONLY,
    deletedAt: DataTypes.DATEONLY
  }, {
    sequelize,
    paranoid: true,
    defaultScope: {where: {status: true}},
    modelName: 'Reservas',
  });
  return Reservas;
};