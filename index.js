

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const port = 5000

const password ="ArabianHorse79";

const app = express()

app.use(cors())
app.use(bodyParser.json())
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://arabian:sakib@cluster0.abcuj.mongodb.net/burjAlArab?retryWrites=true&w=majority";



const client = new MongoClient(uri, { useUnifiedTopology: true, useNewUrlParser: true});
client.connect(err => {
  console.log(err)
  const bookings = client.db("burjAlArab").collection("bookings");
  //  console.log('db connection success');
 app.post('/addBooking',(req, res) => {
   const newBooking = req.body;
   bookings.insertOne(newBooking)
   .then(result => {
    //  console.log(res) error dibe nicchi result log korchi res
    console.log(result)
    // res.send(result.insertedCount > 0)
   })
   console.log(newBooking)
 })
  // client.close();
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port)

//  bookingsCollection.insertOne(newBooking);
    // .then(result => {
    //   console.log(result)
      // res.send(result.insertedCount > 0)
    // })

// 49.3
// const express = require('express')
// const app = express()
// const port = 5000

// const password ="ArabianHorse79";



// const MongoClient = require('mongodb').MongoClient;
// // const uri = "mongodb+srv://organicUser:<password>@cluster0.abcuj.mongodb.net/burj-al-arab?retryWrites=true&w=majority";
// const uri = "mongodb+srv://arabian:ArabianHorse79@cluster0.abcuj.mongodb.net/burj-al-arab?retryWrites=true&w=majority";

// const client = new MongoClient(uri, { useNewUrlParser: true , useUnifiedTopology: true});
// client.connect(err => {
//   const collection = client.db("burj-al-arab").collection("bookings");
//   console.log('db connection success');
//   // perform actions on the collection object
//   client.close();
// });


// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port)
// cd \Web development\Node-mongo\burj-al-arab-server