const bcrypt = require('bcryptjs')

function criptografarSenha(password){
	const salt = bcrypt.genSaltSync(10)
	const hash = bcrypt.hashSync(password, salt)
	return hash
}

module.exports = {criptografarSenha}