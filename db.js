const mongoose = require("mongoose");

function connectDB() {

    mongoose.connect('mongodb+srv://jannu:jannu@cluster0.yq2wz.mongodb.net/carrental', { useUnifiedTopology: true, useNewUrlParser: true })

    const connection = mongoose.connection

    connection.on('connected', () => {
        console.log('Mongo DB Connection Successfull')
    })

    connection.on('error', () => {
        console.log('Mongo DB Connection Error')
    })


}

connectDB()

module.exports = mongoose