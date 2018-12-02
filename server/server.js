//mongo ds143774.mlab.com:43774/todos -u <dbuser> -p <dbpassword>
//heroku config:set MONGOLAB_URI=mongodb://<dbuser>:<dbpassword>@ds143774.mlab.com:43774/todos
var express = require('express');
var bodyParser = require('body-parser');
var { ObjectID } = require('mongodb');

var { mongoose } = require('./db/mongoose');
var { Todo } = require('./models/todo');
var { User } = require('./models/user');

var app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({ todos });
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos/:id', (req, res) => {
    var id = req.params.id;

    //valid user id using isValid
    //404 -send back empty send
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    //findById
    //success
    //if todo -send it back
    //if no todo -send back 4040 with empty body
    //error
    //404 - and send empty back 

    Todo.findById(id).then((todo) => {
        if (!todo) {
            return res.status(404).send();
        }
        res.send({ todo })
    }).catch((e) => {
        res.status(404).send();
    });

});

app.delete('/todos/:id', (req, res) => {

    var id = req.params.id;

    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    };

    Todo.findByIdAndRemove(id).then((todo) => {

        if (!todo) {
            return res.status(404).send();
        }

        res.send(todo);
    }).catch((e) => {
        res.status(400).send();
    });

});

app.listen(port, () => {
    console.log(`Start listen on port ${port}`);
});

module.exports = { app };
