const bodyParser = require('body-parser')
const pessoas = require('./pessoasRoute')
const acomodacoes = require('./acomodacoesRoute')

module.exports = app => {
    app.use(bodyParser.json())
    app.use(pessoas)
    app.use(acomodacoes)
    app.get('/', (req, res) => res.send('Olá!'))
}
