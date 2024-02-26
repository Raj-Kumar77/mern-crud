const mongoose = require('mongoose')

const connectDB = async() =>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        if(conn){
            console.log('db connected')
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB