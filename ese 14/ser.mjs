import express from 'express'
import morgan from 'morgan'
import dotenv from 'dotenv'
dotenv.config()
import { getAll , getOneByID , create , updateByID , deleteByID } from './planet-controller.mjs'

const app = express()

app.use(express.json())
app.use(morgan('dev'))

app.use('/' , (req , res , next) => { 
    console.log(req.method)
    next()
})

app.get('/api/planets' , getAll)
app.get('/api/planets/:id' , getOneByID)
app.post('/api/planets' , create)
app.put('/api/planets/:id' , updateByID)
app.delete('/api/planets/:id' , deleteByID)

app.listen(process.env.PORT , ()=>{
    console.log('Server running on http://localhost:3000');
})