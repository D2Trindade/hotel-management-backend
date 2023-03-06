'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pessoas extends Model {
    static associate(models) {
      Pessoas.hasMany(models.ServicosAdicionaisReservados, {foreignKey: 'pessoa_id'})
      Pessoas.hasMany(models.ServicosPorPessoas, {foreignKey: 'pessoa_id'})
      Pessoas.hasMany(models.Reservas, {foreignKey: 'pessoa_id'})
    }
  }
  Pessoas.init({
    nome: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      }
    },
    ativo: DataTypes.BOOLEAN,
    email: {
      type: DataTypes.STRING,
      unique: true,
        validate: { 
          isEmail: {
            args: true,
            msg: 'É necessário informar um email válido!'
          }
        }
    },
    password: DataTypes.STRING, 
    role: DataTypes.STRING
  }, {
    sequelize,
    paranoid: true,
    defaultScope: {where: {ativo: true}}, // Só vai trazer nas consultas as pessoas que estão com a opção ativas
    modelName: 'Pessoas',
  });
  return Pessoas;
};