const express = require('express');
const ConnectDB = require("./db/db.js")
const cors = require('cors');
const app = express();
require('dotenv').config();
const port = process.env.PORT;
const routes = require("./Routes/routes.js")


 app.use(express.json());

app.use('/',routes);
app.use(cors()); //here cors is empty means allowed every port
ConnectDB();
app.listen(port, ()=>{
    console.log(`Server is running on ${port}`);
    
})
