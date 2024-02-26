const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv').config()
const app = express()
const userRouter = require('./router/userRoute')

const connectDB = require('./config/db')
connectDB()

app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
    res.send('hello')
})

app.use('/api/user',userRouter)

app.listen(4000,()=>{
    console.log('server listening at port 4000')
})