//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to Mongo server');
    }

    console.log('Connect to MongoDB server');

    //delete many
    /*    db.collection('Todos').deleteMany({ text: 'Eat lunch' }).then((result) => {
           console.log(result);
   
       }); */
    //delete one
    /*   db.collection('Todos').deleteOne({ text: 'Eat lunch' }).then((result) => {
          console.log(result);
      }); */
    //find one and delete
    /*  db.collection('Todos').findOneAndDelete({ completed: false }).then((result) => {
         console.log(result);
     }); */

    /*   db.collection('Users').deleteMany({ name: 'User 2' });
  
      db.collection('Users').findOneAndDelete({ _id: new ObjectID('5bf65e9c119bf812d010c4ec') })
          .then((result) => {
              console.log(JSON.stringify(result, undefined, 2));
          });
   */
    // db.close();


});


