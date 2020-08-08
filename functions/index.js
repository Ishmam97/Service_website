const functions = require('firebase-functions');
const admin = require('firebase-admin')
const serviceAccount = require("./key.json")
const path = require('path');
const express = require('express')
const bodyParser = require("body-parser");
const app = express()
const url = require('url');

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://disinfectors-inc.firebaseio.com"

});

const db = admin.firestore()
const orderRef = db.collection('orders')
app.get('/test' , (req, res)=>{
  functions.logger.log("Hello testingggnggndasinfao");
  res.send('Hello');
});
app.get('/success' , (req, res)=>{
  res.sendFile(path.join(__dirname,'public/success.html'));
});
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname,'public/index.html'));
});

app.get('/about', function(req, res) {
    res.sendFile(path.join(__dirname,'public/about.html'));
});

app.get('/recruit', function(req, res) {
    res.sendFile(path.join(__dirname,'public/recruit.html'));
});
app.get('/order', function(req, res) {
    res.sendFile(path.join(__dirname,'public/order.html'));
});
app.post('/setOrders' , (req , res)=>{
  let Tbill =parseInt(req.body.area)*0.5;
  if (Tbill < 500){
    Tbill = 500;
  }
  let newOrder ={
    covidStatus: req.body.covidStatus,
    name: req.body.name,
    address: req.body.address,
    phone: req.body.phone,
    type: req.body.type,
    area: req.body.area,
    date: req.body.date,
    orderPlaced: admin.firestore.Timestamp.fromDate(new Date()),
    bill: Tbill
  };
  admin.firestore()
  .collection('order')
  .add(newOrder)
  .then(doc=>{
    res.redirect('/success')
    res.end()
  }).catch(err=>{
    res.status(500).json({error:'something went wrong while creating new order'})
  })
});

app.get('/sub', function(req, res) {
    res.sendFile(path.join(__dirname,'public/subscribe.html'));
});
app.post('/subOrder', function(req , res){
  let days = req.body.days.length;
  let times = parseInt(req.body.times);
  let Tbill = parseInt(req.body.area)* 0.14375 * days * times * 4;
  if(Tbill<575){
    Tbill = 575;
  }

  let newOrder ={
    bname: req.body.name,
    type: req.body.type,
    address: req.body.address,
    phone: req.body.phone,
    area: req.body.area,
    days: req.body.days,
    timesPerDay: req.body.times,
    covidStatus: req.body.covidStatus,
    startDate: req.body.date,
    orderPlaced: admin.firestore.Timestamp.fromDate(new Date()),
    bill: Tbill
  };
  admin.firestore()
  .collection('sub')
  .add(newOrder)
  .then(doc=>{
    res.redirect('/success')
    res.end()
  }).catch(err=>{
    res.status(500).json({error:'something went wrong while creating new order'})
  })

});

app.get('/getOrders' ,(req , res) => {
      db.collection('order').get().then(data =>{
        let arr = []
        data.forEach(doc => {
          arr.push(doc.data())
        })
        return res.json(arr)
      }).catch(err => console.error(err))
} );





// .region('asia-south1')
exports.app = functions.https.onRequest(app);
