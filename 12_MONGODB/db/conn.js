const { MongoClient } = require('mongodb')   

const uri = "mongodb://localhost:27017/testemongodb2";
const client = new MongoClient(uri);

async function run(){
    try {
        await client.connect()
        console.log("Connectando ao MongoDB!")
    } catch (error) {
        console.log(error)
    }
}

run()

module.exports = client