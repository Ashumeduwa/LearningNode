const {MongoClient} = require('mongodb') //creating mongo instance syntac should be exact
const url = 'mongodb://localhost:27017'; // your data base link
const database = 'Sample' // your database name
const client = new MongoClient(url); //creating client object

async function getData()
{
    let result = await client.connect(); //creating connection to DB
    let db = result.db(database); // creating DB object
    let collection = db.collection('learning');
    return collection; //creating collection form DB
}

module.exports =  getData;