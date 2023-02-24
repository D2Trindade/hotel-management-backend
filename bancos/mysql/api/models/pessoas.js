'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pessoas extends Model {
    static associate(models) {
      // define association here
    }
  }
  Pessoas.init({
    nome: DataTypes.STRING,
    // nome: {
    //   type: DataTypes.STRING,
    //   validate: {  // Exemplo de uso de funções em JavaScript para validação dos dados
    //     funcaoValidadora: function(dado){
    //       if(dado.length < 3) throw new Error(`O campo nome deve ter mais de 3 caracteres.`)
    //     }
    //   }
    // },
    ativo: DataTypes.BOOLEAN,
    email: DataTypes.STRING,
    // email: {
    //   types: DataTypes.STRING,
    //   unique: true, // Exemplo de constraints em SQL
    //     validate: {  //Faz a validação automática do email, apenas uma validação quanto ao formato da string
    //       isEmail: {
    //         args: true,
    //         msg: 'Dado do tipo e-mail é inválido!'
    //       }
    //     }
    // },
    role: DataTypes.STRING
  }, {
    sequelize,
    paranoid: true,
    defaultScope: {where: {ativo: true}}, // Só vai trazer nas consultas as pessoas que estão com a opção ativas
    modelName: 'Pessoas',
  });
  return Pessoas;
};