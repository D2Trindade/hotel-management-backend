'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ServicosPorPessoas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ServicosPorPessoas.belongsTo(models.ServicosAdicionaisReservados, {foreignKey: 'servicosadicionaisreservados_id'})
      ServicosPorPessoas.hasMany(models.Reservas, {foreignKey: 'servicosporpessoa_id'})
      ServicosPorPessoas.belongsTo(models.Pessoas, {foreignKey: 'pessoa_id'})
    }
  }
  ServicosPorPessoas.init({
    valorTotal: DataTypes.DECIMAL,
    deletedAt: DataTypes.DATEONLY
  }, {
    sequelize,
    paranoid: true,
    defaultScope: {where: {ativo: true}},
    modelName: 'ServicosPorPessoas',
  });
  return ServicosPorPessoas;
};