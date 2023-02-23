'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Acomodacoes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Acomodacoes.hasMany(models.Quartos, {foreignKey: 'acomodacao_id'})
    }
  }
  Acomodacoes.init({
    tipo: DataTypes.STRING,
    descricao_acomodacoes: DataTypes.STRING,
    preco: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'Acomodacoes',
  });
  return Acomodacoes;
};