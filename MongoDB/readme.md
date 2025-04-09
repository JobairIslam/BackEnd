DATABASE->COLLECTION(table)->DOCUMENTS(record/row)


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


*Comparison Query Operators*

// MongoDB Comparison Query Operators

// $eq (Equal to)
db.products.find({ price: { $eq:  100 } })

// $ne (Not equal to)
db.products.find({ price: { $ne: 100 } })

// $gt (Greater than)
db.products.find({ price: { $gt: 100 } })

// $gte (Greater than or equal to)
db.products.find({ price: { $gte: 100 } })

// $lt (Less than)
db.products.find({ price: { $lt: 100 } })

// $lte (Less than or equal to)
db.products.find({ price: { $lte: 100 } })

// $in (Matches any value in an array)
db.products.find({ price: { $in: [100, 200, 300] } })

// $nin (Does not match any value in an array)
db.products.find({ price: { $nin: [100, 200, 300] } })

