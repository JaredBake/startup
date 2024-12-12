const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const config = require('../dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('startup');
const userCollection = db.collection('user');
const eventCollection = db.collection('events');

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});

function getUser(email) {
  return userCollection.findOne({ email: email });
}

function getUserByToken(token) {
  return userCollection.findOne({ token: token });
}

async function createUser(email, password) {
  // Hash the password before we insert it into the database
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
  };
  await userCollection.insertOne(user);

  return user;
}

async function addEvent(event) {
  const event = { title, date: new Date(date)};
  const result = await userCollection.updateOne(
    { email },
    { $push: { events: event} }
  );
  return result.modifiedCount > 0 ? event : null;
}

async function getEvents(email){
  const user = await userCollection.findOne({email});
  return user ? user.events : [];
}

module.exports = {
  getUser,
  getUserByToken,
  createUser,
  addEvent,
  getEvents,
};
