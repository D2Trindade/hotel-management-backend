'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Acomodacoes extends Model {
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
    paranoid: true,
    // defaultScope: {where: {deletedAt: Null}}, // Só vai trazer nas consultas os tipos de acomodações que estão ativas
    modelName: 'Acomodacoes',
  });
  return Acomodacoes;
};