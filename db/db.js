const mongoose = require("mongoose");
require('dotenv').config();

const ConnectDB = async () => {
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${process.env.DB_NAME}`);
        console.log(`MongoDb connected !! DB Host :${connectionInstance.connection.host}`);
    }
    catch(error){
        console.log("MongoDB connection Error",error); 
        process.exit(1);
    }
};

module.exports = ConnectDB;


