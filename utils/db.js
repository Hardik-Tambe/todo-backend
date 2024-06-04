const mongoose = require('mongoose')
require('dotenv').config()

const dbconnect = async () =>{
    try {
      await mongoose.connect(process.env.URI);
        console.log("mongodb connected")
    } catch (error) {
        console.log("NOt connected")
        process.exit(1)
    }
}

module.exports = {dbconnect}