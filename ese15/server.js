
import express from 'express'
import morgan from 'morgan'
import multer from 'multer'
import dotenv from 'dotenv'
dotenv.config()
import { getAll , getOne , deletePlanet , modifyPlanet ,createPlanet , uploadFile} from './planetdb.mjs'

const port = process.env.PORT
const app = express()

app.use(express.json())
app.use(morgan('dev'))
app.use('/upload' , express.static('upload'))


const storage = multer.diskStorage({
    destination : (req , file , cb) => {
        cb(null , "./upload")
    },
    filename : (req , file ,cb) => {
        cb(null , file.originalname)
    }
})

const upload = multer({ storage })

app.use('/' , (req , res , next) => {
    console.log(req.method);
    next()
})

app.get('/' , getAll)
app.get('/planet/:id' , getOne)
app.delete('/planet/:id' , deletePlanet)
app.patch('/planet/:id' , modifyPlanet)
app.post('/planet' , createPlanet)
app.post('/planet/file/:id' , upload.single('file') , uploadFile)

app.listen(port , () => {
    console.log('Server Start at http://localhost:3000');
})
