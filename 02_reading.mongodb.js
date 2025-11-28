use("ecommerce");
//db.products.find();//this shows all the products in the products collection
db.products.find({"name":"Wireless Mouse"});

//Output will BE like this 
/*
[
  {
    "_id": {
      "$oid": "6929a9797dd1dd0d60c22ca5"
    },
    "name": "Wireless Mouse",
    "price": 799,
    "category": "Electronics",
    "stock": 120,
    "ratings": 4.5,
    "tags": [
      "computer",
      "accessory",
      "wireless"
    ],
    "createdAt": {
      "$date": "2025-11-28T13:54:01.646Z"
    }
  }
]

*/

db.products.find({"category":"Electronics"});//Now it will Show all the Electronics Item 

db.products.find({price:{$gt:1000}});//This will show all the products whose price is greater than 1000

//$gt --> greater than
//$lt --> less than
//$gte --> greater than equal to
//$lte --> less than equal to



//We can also ues the logical Operators

db.products.find({ $or: [{ category: "Electronics" }, { stock: { $lt: 50 } }] });

//$or --> logical OR
//$and --> logical AND

//Projection in Mongodb(Selecting specific fields)
db.products.find({},{name:1,price:1 ,_id:0});

//This will give this like output
/*{
    "name": "Gaming Laptop",
    "price": 85999
  }*/

//Sorting and Limiting 
//this is use during the pagination of a website or application

db.products.find().sort({price:-1}).skip(0).limit(2);

//{price:-1}--> (-1)part is used for the decresing Order
//.skip(num)-->this is use to skip number of documents from begining
//.limit(num)-->this is use to limit the number of documents to show at a time 