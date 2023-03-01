const bodyParser = require('body-parser')
const pessoas = require('./pessoasRoute')
const acomodacoes = require('./acomodacoesRoute')
const quartos = require('./quartosRoute')

module.exports = app => {
    app.use(bodyParser.json())
    app.use(pessoas)
    app.use(acomodacoes)
    app.use(quartos)
    app.get('/', (req, res) => res.send('Olá!'))
}
