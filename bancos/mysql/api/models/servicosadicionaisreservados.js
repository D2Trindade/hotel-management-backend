'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ServicosAdicionaisReservados extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ServicosAdicionaisReservados.belongsTo(models.ServicosAdicionais, {foreignKey: 'servicosadicionais_id'})
      // ServicosAdicionaisReservados.hasMany(models.ServicosPorPessoa, {foreignKey: 'servicosadicionaisreservados_id'})
      ServicosAdicionaisReservados.belongsTo(models.Pessoas, {foreignKey: 'pessoa_id'})
    }
  }
  ServicosAdicionaisReservados.init({
    status: DataTypes.BOOLEAN,
    quatidade: DataTypes.INTEGER,
    deletedAt: DataTypes.DATEONLY
  }, {
    sequelize,
    paranoid: true,
    defaultScope: {where: {ativo: true}},
    modelName: 'ServicosAdicionaisReservados',
  });
  return ServicosAdicionaisReservados;
};