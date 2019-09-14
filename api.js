const express = require('express');
const app = express();
const port = 3000;
const MongoClient = require('mongodb').MongoClient;

app.get('/findone', (req, res) => {
  client.connect(err => {
    const collection = client.db('SayHello').collection('Languages');
    collection.findOne({}, (err, result) => {
      if (err) throw err;
      res.json(result);
      client.close();
    });
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
const uri =
  'mongodb+srv://<USERNAME>:<PASSWORD>@mycluster-alhip.mongodb.net/test?retryWrites=true&w=majority';
const client = new MongoClient(uri, { useNewUrlParser: true });
