import algosearch from 'algoliasearch';
import { sync } from 'fumadocs-core/search/algolia';
import * as fs from 'node:fs';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const ALGOLIA_APP_ID = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID;
const ALGOLIA_WRITE_KEY = process.env.ALGOLIA_WRITE_KEY;

// Read the exported JSON file
const content = fs.readFileSync('.next/server/app/static.json.body');

/** @type {import('fumadocs-core/search/algolia').DocumentRecord[]} **/
const indexes = JSON.parse(content.toString());


console.log('APP_ID', ALGOLIA_APP_ID);
console.log('API_KEY', ALGOLIA_WRITE_KEY);

if(!ALGOLIA_APP_ID || !ALGOLIA_WRITE_KEY) {
  throw new Error('Missing Algolia environment variables.');
}

// Initialize Algolia client
const client = algosearch( ALGOLIA_APP_ID , ALGOLIA_WRITE_KEY);

// Sync search indexes with Algolia
sync(client, {
  documents: indexes, // The extracted documents to index
});
