require("dotenv").config();
const { MongoClient } =  require('mongodb');

let conection;

let conect =  async () => {

    if(conection) return conection;

    const clinte = new MongoClient(process.env.DB_HOST + process.env.DB_PORT)
    await clinte.connect();

    conection = await clinte.db(process.env.DB_NAME);

    return conection;
}

let insert = async(user) =>{
    const db = await conect();
    return db.collection("Users").insertOne(user);
}

module.exports = {
    insert
}