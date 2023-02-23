'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Quartos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Quartos.belongsTo(models.Acomodacoes, {foreignKey: 'acomodacao_id'})
    }
  }
  Quartos.init({
    numero_quarto: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    paranoid: true,
    modelName: 'Quartos',
  });
  return Quartos;
};