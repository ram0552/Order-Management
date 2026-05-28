const { MongoClient } = require("mongodb");
require("dotenv").config();

let db;     // cache the DB instance
let client; // cache the client


async function connectDB() {
  if (db) {
    return db; // reuse existing connection
  }

  try {
    const uri = process.env.MONGO_URI;
    const dbName = process.env.DB_NAME;

    if (!uri || !dbName) {
      throw new Error("MONGO_URI and DB_NAME must be set in .env");
    }

    client = new MongoClient(uri);

    await client.connect();
    db = client.db(dbName);

    console.log(`MongoDB connected: ${dbName}`);
    return db;
  } catch (err) {
    console.error("Error connecting to MongoDB:", err.message);
    process.exit(1); // crash if DB connection fails
  }
}

// Clean shutdown (important in dev/test)
process.on("SIGINT", async () => {
  if (client) {
    await client.close();
    console.log("MongoDB connection closed");
    process.exit(0);
  }
});

module.exports = connectDB;
