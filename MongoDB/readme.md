🟢Start Mongo Shell & Connect
mongosh                // Start the MongoDB shell

🗃️ Working with Databases
show dbs               // Show all databases
use myDatabase         // Switch to (or create) a database
db                     // Show current database
db.dropDatabase()      // Delete the current database


✅Create collection directly
db.createCollection("products")


📁 Working with Collections
show collections       // Show all collections in the current database


➕ Insert Data
db.collection.insertOne({ key: value })
db.collection.insertMany([{ key: value }, { key: value }])

🔍 Find Data
db.collection.find()                       // Show all documents
db.collection.find().pretty()              // Prettier format
db.collection.find({ key: value })         // Filter by field
db.collection.find({ price: { $gt: 100 } })// Filter with condition


✏️ Update Data
db.collection.updateOne({ filter }, { $set: { key: newValue } })


🗑️ Delete Data
db.collection.deleteOne({ key: value })                           // Delete one
db.collection.deleteMany({ key: value })                          // Delete many
db.collection.deleteOne({ _id: ObjectId("your_id_here") })        // Delete by ID

