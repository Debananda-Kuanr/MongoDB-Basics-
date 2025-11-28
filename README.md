# MongoDB-Basics

## 📌 Description  
This repository contains simple and beginner-friendly JavaScript scripts demonstrating **basic MongoDB operations** such as setup, reading, updating, and deleting data.  
It is part of my learning journey while understanding how MongoDB works using JavaScript.

## 📂 Project Structure  
```
/  
├── 01_setup.mongodb.js       # MongoDB connection / database setup  
├── 02_reading.mongodb.js     # Read documents from collection  
├── 03_update.mongodb.js      # Update documents  
├── 04_delete.mongodb.js      # Delete documents  
└── README.md                 # Project documentation  
```

## 🛠️ Prerequisites  
- Node.js (v14 or higher recommended)  
- MongoDB installed locally or MongoDB Atlas account  
- Basic JavaScript knowledge  
- npm package: **mongodb**

---

# 🚀 Getting Started

## 1️⃣ Clone the Repository  
```bash
git clone https://github.com/Debananda-Kuanr/MongoDB-Basics-.git
cd MongoDB-Basics-
```

## 2️⃣ Install Dependencies  
```bash
npm install mongodb
```

## 3️⃣ Make Sure MongoDB Is Running  
- Local MongoDB  
**OR**
- MongoDB Atlas connection string

---

# ▶️ How to Run Files

### 📄 Run Setup File  
```bash
node 01_setup.mongodb.js
```

### 📄 Run Read File  
```bash
node 02_reading.mongodb.js
```

### 📄 Run Update File  
```bash
node 03_update.mongodb.js
```

### 📄 Run Delete File  
```bash
node 04_delete.mongodb.js
```

---

# 📘 Example Code Snippets

## 🔌 **MongoDB Connection Example**
```js
const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017"; // or your Atlas URL
const client = new MongoClient(url);

async function main() {
  await client.connect();
  console.log("Connected to MongoDB");

  const db = client.db("testdb");
  const collection = db.collection("users");

  // Your operations here
}

main();
```

---

## 📖 **Reading Data Example**
```js
const data = await collection.find({}).toArray();
console.log("Documents:", data);
```

---

## ✏️ **Update Example**
```js
await collection.updateOne(
  { name: "John" },
  { $set: { age: 30 } }
);
```

---

## ❌ **Delete Example**
```js
await collection.deleteOne({ name: "John" });
```

---

# 🎯 What You Will Learn  
✔️ Connecting to MongoDB  
✔️ How CRUD Works  
✔️ Working with collections  
✔️ Using MongoDB from JavaScript  

---

# 🌱 Future Improvements  
- Add Create (Insert) script  
- Add sample data file  
- Add advanced MongoDB queries  
- Add comments inside each file for learning  

---

# 👤 Author  
**Debananda Kuanr**  
Beginner exploring JavaScript and MongoDB.

---

# ⭐ Support  
If you like this project, consider giving it a **star ⭐ on GitHub**!

