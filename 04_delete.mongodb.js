use("ecommerce")

db.contacts.deleteOne({name:"Bob"});

db.contacts.insertOne(
    { name: "Bob", message: "Do you have discounts on laptops?", phone: "9123456789",
createdAt: new Date() }
)

//db.contacts.deleteMany({message:/cancel/i});
//This will delete all the messages which contains the word "cancel" in it. The 'i' is for case insensitive







