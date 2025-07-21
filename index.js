require("dotenv").config()//configuring dotenv package to server for loading env variables to process.env

const express = require('express')//importing express

const cors = require('cors')

const router = require('./routes/routes')

require('./connect/dbConnect')

const server = express()//creating a server app

server.use(cors())

server.use(express.json())//configuring json middleware to convert json data format to native

server.use(router)

server.use('/image', express.static('./uploads'))

const PORT = process.env.PORT || 3000//setting default port number and alternate port number from env

server.listen(PORT, () => {//for making server run and wait for requests
    console.log("Server Running at", PORT);

})

// server.use('/demo', (req, res) => {//simple request handler example
//     res.send("Request Hit!!")
// })

// server.get('/getreq/:uid', (req, res) => {//get request handler
//     console.log(req.params.uid);
//     res.send("Get Request Hit!!")
// })

// server.post('/postreq', (req, res) => {//post request handler
//     console.log(req.query);
//     console.log(req.body);
//     // res.send("Post Request Hit!!")
//     res.json({"req":"Ok"}).status(200)
// })

// server.put('/putreq', (req, res) => {//put request handler
//     res.send("PUT Request Hit!!")
// })

// server.delete('/deletereq', (req, res) => {//delete request handler
//     res.send("Delete Request Hit!!")
// })

