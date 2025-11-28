use("ecommerce");

db.products.updateOne(
  {
    name: "Wireless Mouse",
  },
  {
    $set: { price: 899 },
  }
);

//This is use to Update the price of Wireless Mouse from 799 to 899

db.products.updateMany(
{ category: "Electronics" },
{ $inc: { stock: 18 } }
)


//Push a new tag to all products in Computers category
db.products.updateMany(
{ category: "Computers" },
{ $push: { tags: "tech" } }
)

db.products.updateOne({
  name: "Gaming Laptop",
},
{
  $push:{tags:"bestseller"}
})