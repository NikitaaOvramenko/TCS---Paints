
require('dotenv').config()

const express = require("express")
const sequelize = require('./db')
const cors = require("cors")
const router = require('./routes/index')
const port = process.env.PORT
const fileUpload = require('express-fileupload')
const path = require('path')



const app = express()

app.use('/media', express.static(path.resolve(__dirname, 'media')));
app.use(cors())
app.use(express.json())
app.use(fileUpload())


app.get("/", (req, res) => res.send("Express on Vercel"));

app.use('/api',router)

const start = async() =>{

    try {

        await sequelize.authenticate()
        await sequelize.sync()
        // app.listen(port,() => {console.log(`Port ${port}...`)})
        
    } catch (error) {
        console.log(error)        
    }


}

start();

module.exports = app;








