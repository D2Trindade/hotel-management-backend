
const bcrypt = require('bcryptjs')

function criptografarSenha(password){
	const salt = bcrypt.genSaltSync(10) //quantos rounds ele vai criar p gerar os n°s
	const hash = bcrypt.hashSync(password, salt) //()qual elemento vai cript e qual a forma
	return hash //para ver o hash da criptografia
}

module.exports = {criptografarSenha}
