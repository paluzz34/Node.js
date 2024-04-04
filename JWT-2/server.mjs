import express from 'express'
import morgan from 'morgan'
import multer from 'multer'
import dotenv from 'dotenv'
dotenv.config()
import { getAll , getOne , deletePlanet , modifyPlanet ,createPlanet , uploadFile} from './planets.mjs'
import { logIn, signup} from "./controllers/users.mjs"

const port = 3000;
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

app.post("/users/login", logIn)
app.post("/users/signup", signup)

app.listen(port , () => {
    console.log(`Server Start at http://localhost:${port}`);
})