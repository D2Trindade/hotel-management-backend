const bcrypt = require('bcryptjs')

function criptografarSenha(password){
	const salt = bcrypt.genSaltSync(10)
	const hash = bcrypt.hashSync(password, salt)
	return hash
}

function descriptografarSenha(password, passwordCripto){
    const comparaSenha = bcrypt.compareSync(password, passwordCripto)
    return comparaSenha
}

module.exports = {criptografarSenha, descriptografarSenha}