//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to Mongo server');
    }

    console.log('Connect to MongoDB server');

    /*  db.collection('Todos').find().count().then((count) => {
         console.log(`Todos count ${count}`);
     }, (err) => {
         console.log('Unable to fetch todos', err);
     }); */

    db.collection('Users').find({ name: 'User 2' }).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });

    // db.close();
});


