
const mongoose = require('mongoose')

mongoose.connect(process.env.DBCONNECT).then(res => console.log("Server Connected With MongoDB-Atlas")).catch(err => console.log(err))