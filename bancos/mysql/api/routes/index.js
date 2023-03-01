const bodyParser = require('body-parser')
const pessoas = require('./pessoasRoute')
const acomodacoes = require('./acomodacoesRoute')
const quartos = require('./quartosRoute')
const servicos = require('./servicosAdicionaisRoute')

module.exports = app => {
    app.use(bodyParser.json())
    app.use(pessoas)
    app.use(acomodacoes)
    app.use(quartos)
    app.use(servicos)
    app.get('/', (req, res) => res.send('Olá!'))
}
