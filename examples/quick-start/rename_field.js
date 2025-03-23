// rename_field.js
const { MongoClient } = require("mongodb");

// Replace these values or ensure they're set in your environment
const uri = process.env.MONGODB_CONNECTION_URI || "mongodb+srv://ndennehy:T4i58spevFWliHYZ@aiexamgamev3cluster.genxf.mongodb.net/?retryWrites=true&w=majority&appName=AIExamGameV3Cluster";
const dbName = process.env.MONGODB_DATABASE_NAME || "mongodb-chatbot-framework-chatbot" ;

async function renameField() {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db(dbName);
    const collection = db.collection("embedded_content");

    // Rename field: if 'embeddings' exists, rename it to 'embedding'
    const result = await collection.updateMany(
      { embeddings: { $exists: true } },
      { $rename: { "embeddings": "embedding" } }
    );

    console.log(`${result.modifiedCount} documents updated`);
  } catch (error) {
    console.error("Error renaming field:", error);
  } finally {
    await client.close();
  }
}

renameField();