const { MongoClient } = require('mongodb')
const data = require('./listingData')

const dbName = 'bnb';
const colName = 'listings';

const url = 'mongodb+srv://bakecs260:cs260password@bakecluster.ievjm.mongodb.net/bnb';

async function  main() {
    const client = new MongoClient(url);

    try{
        await client.connect();

        const result  = await client.db(dbName).collection(colName).insertMany(data);

        console.log('Inserted ${result.insertedCount} docs');
    }finally {
        await client.close();
    }
}

main().catch(console.error);