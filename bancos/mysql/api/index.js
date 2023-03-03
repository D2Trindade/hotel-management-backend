const express = require('express')
const routes = require('./routes')
const cors = require('cors');

const app = express()
const port = 3000

app.options('*', cors())
app.use((req,res,next) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

routes(app)

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))

module.exports = app
