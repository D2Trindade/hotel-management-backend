'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ServicosAdicionais extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ServicosAdicionais.hasMany(models.ServicosAdicionaisReservados, {foreignKey: 'servicosadicionais_id'})
    }
  }
  ServicosAdicionais.init({
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    preco: DataTypes.DECIMAL,
    deletedAt: DataTypes.DATEONLY
  }, {
    sequelize,
    paranoid: true,
    defaultScope: {where: {ativo: true}},
    modelName: 'ServicosAdicionais',
  });
  return ServicosAdicionais;
};