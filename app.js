
// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/inventoryItems',{useNewUrlParser:true});
}

const productSchema = new mongoose.Schema({
  name: String,
  price: Number
})


const Product = mongoose.model('Product',productSchema);

const eightFootDam = new Product({
  name: 'Water Filled Cofferdam',
  price: 90000
})

const sixFootDam = new Product({
  name: 'Six Foot Cofferdam',
  price: 670999
})
sixFootDam.save()
/*
1). Install Express. 
2). Keep Project under version control
3). Make a route that will allow new product to be added 
4). Keep restful route in mind.

*/






