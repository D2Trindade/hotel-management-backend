const express = require('express')
const routes = require('./routes')
const cors = require('cors');
const multer = require('multer')

const app = express()
const port = 3000

app.options('*', cors())
app.use(express.urlencoded({ extended: true}))
app.use((req,res,next) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

// Upload de imagens - Multer
const storage = multer.diskStorage({ 
    destination: (req, file, cb) => {
        cb(null, `../../src/assets/images/acomodacoes`)
    },
    filename: (req, file, cb) => {
        const originalName = file.originalname.toLowerCase().split('.')
        const fileName = `acomodacoes-${originalName[0]}-1.${originalName[1]}`
        cb(null, fileName)
    }
})

const uploadAcomodacoes = multer({
    storage: storage,
    fileFilter: (req, file, cb) => { 
        if(file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true)
        }
        else {
            cb(null, false)
            return cb(new Error('Apenas os formatos .png, .jpg e .jpeg são permitidos!'))
        }
    }
})

app.post('/uploadAcomodacoes', uploadAcomodacoes.array('file'), async (req, res) => { res.send({ upload: true, files: req.files }) })


routes(app)
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))

module.exports = app
