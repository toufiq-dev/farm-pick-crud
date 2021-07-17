const mongoose = require('mongoose')
const Product = require('./models/product')

mongoose
  .connect('mongodb://localhost:27017/farmStand', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('MONGO CONNECTION OPEN!!!')
  })
  .catch((err) => {
    console.log('MONGO CONNECTION ERROR!!!!')
    console.log(err)
  })

// const p = new Product({
//   name: 'Kazi Guava',
//   price: 1.99,
//   category: 'fruit',
// })

// p.save()
//   .then((res) => {
//     console.log(res)
//   })
//   .catch((e) => {
//     console.log(e)
//   })

const seedProducts = [
  {
    name: 'Fairy Eggplant',
    price: 1.0,
    category: 'vegetables',
  },
  {
    name: 'Organic Goddess Melon',
    price: 4.99,
    category: 'fruit',
  },
  {
    name: 'Organic Mini Seedless Watermelon',
    price: 3.99,
    category: 'fruit',
  },
  {
    name: 'Organic Celery',
    price: 1.5,
    category: 'vegetables',
  },
  {
    name: 'Chocolate Whole Milk',
    price: 2.69,
    category: 'dairy',
  },
]

Product.insertMany(seedProducts)
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
