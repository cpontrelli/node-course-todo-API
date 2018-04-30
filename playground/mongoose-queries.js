const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5ae65a5a8fd3d2a42b8b8aec11';

// if(!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos)
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo)
// });

// Todo.findById(id).then((todo) => {
//     if(!todo) {
//         return console.log('id not found');
//     }
//     console.log('Todo by id', todo);
// }).catch((e) => console.log(e));

var userId = '5ae4e6a5d9cc5b143b4239b8';

User.findById(userId).then((user) => {
    if(!user) {
        return console.log('User not found');
    }
    console.log('User', user);
}, (e) => console.log(e));