//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to Mongo server');
    }

    console.log('Connect to MongoDB server');

    //find one and update
    /*  db.collection('Todos').findOneAndUpdate(
         { _id: new ObjectID('5bfa6ce190be2381a518af57') }, {
             $set: {
                 completed: true
             }
         }, {
             returnOriginal: false
         }).then((result) => {
             console.log(result);
         }); */

    db.collection('Users').findOneAndUpdate(
        { _id: new ObjectID('5bfa71e490be2381a518b1bf') }, {
            $set: {
                name: 'User 2'
            },

            $inc: {
                age: 1

            }
        }, {
            returnOriginal: false
        }).then((result) => {
            console.log(result);
        });

});


