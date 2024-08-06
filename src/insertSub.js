


import { MongoClient } from 'mongodb';
import fetch from 'node-fetch';
const url = 'mongodb://localhost:27017';
const dbName = 'demo';
const citiesCollectionName = 'cities';
const subcountriesCollectionName = 'subcountries';
const jsonUrl = 'https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json';

// Function to get a random class
function getRandomClass() {
  const classes = ['A', 'B', 'C', 'D', 'E', 'F'];
  return classes[Math.floor(Math.random() * classes.length)];
}

async function insertSubcountries() {
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    console.log('Connected to MongoDB server');

    const db = client.db(dbName);
    const citiesCollection = db.collection(citiesCollectionName);
    const subcountriesCollection = db.collection(subcountriesCollectionName);

    // Fetch the JSON data from the URL
    const response = await fetch(jsonUrl);
    const data = await response.json();

    // Get distinct subcountry values
    const distinctSubcountries = [...new Set(data.map(city => city.subcountry))];

    // Create documents with random class
    const subcountryDocs = distinctSubcountries.map(subcountry => ({
      subcountry,
      class: getRandomClass()
    }));

    // Insert the documents into the subcountries collection
    const result = await subcountriesCollection.insertMany(subcountryDocs);
    console.log(`${result.insertedCount} subcountry documents were inserted`);
  } catch (err) {
    console.error('Error:', err);
  } finally {
    await client.close();
    console.log('Connection to MongoDB closed');
  }
}

insertSubcountries();
