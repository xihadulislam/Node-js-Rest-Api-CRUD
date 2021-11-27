const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const todoRouter = require('./api/routes/todoRouter')
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/todo');
const db = mongoose.connection
db.on('error', (e)=>{console.log(e)})
db.once('open', (e)=>{console.log('Database Connected Successfully')})
    

const app = express()
app.use(morgan('dev'))
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use('/api/todos',todoRouter)

app.get('/',(req,res)=>{
    res.send('Hello xihad')
})

const PORT = process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log(`Server is Running on Port ${PORT}`)
})

