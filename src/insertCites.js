

import { MongoClient } from 'mongodb';
import fetch from 'node-fetch';

const url = 'mongodb://localhost:27017';
const dbName = 'demo';
const collectionName = 'cities';
const jsonUrl = 'https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json';

async function insertCities() {
  // Connect to the MongoDB client
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
  
  try {
    await client.connect();
    console.log('Connected to MongoDB server');

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // Fetch the JSON data from the URL
    const response = await fetch(jsonUrl);
    const data = await response.json();

    // Insert the data into the collection
    const result = await collection.insertMany(data);
    console.log(`${result.insertedCount} documents were inserted`);
  } catch (err) {
    console.error('Error:', err);
  } finally {
    // Close the client
    await client.close();
    console.log('Connection to MongoDB closed');
  }
}

insertCities();
