const config = require('./dbConfig.json');
const url = `mongodb+srv://bakecs260:cs260password@bakecluster.ievjm.mongodb.net`;

const client = new MongoClient(url);
const db = client.db('rental');

(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});