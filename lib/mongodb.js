import { MongoClient } from "mongodb";

const url = process.env.MONGODB_URI;


let client;
let clientPromise;

if (!process.env.MONGODB_URI) {
  throw new Error("Add MONGODB_URI to your .env.local file");
}

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {  // ✅ fixed typo
    client = new MongoClient(url);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(url);
  clientPromise = client.connect();
}

export default clientPromise;
