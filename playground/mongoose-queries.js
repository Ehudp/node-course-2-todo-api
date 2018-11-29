const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

var id = '5bfa9cf55151d4be1f9f7923';
var uId = '5bfa7f1380d1d99317f2999e';

// if (!ObjectID.isValid(id)) {
//     console.log("ID not valid");
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('id not found');
//     }
//     console.log('Todo by Id', todo);
// }).catch((e) => console.log(e));

User.findById(uId).then((user) => {
    if (!user) {
        return console.log('Unable to find user');
    }
    console.log(JSON.stringify(user, undefined, 2));

}, (e) => {
    console.log(e);
}).catch((e) => { console.log(e); })