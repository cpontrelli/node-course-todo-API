// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5ae2a8d3e4a58e3e374d849e')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5ae00b88db34ac3df4c9e8f7')
    }, {
        $set: {
            name: 'Charlie',
            location: 'Santa Clara'
        },
        $inc: {
            age: -1
        }        
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    //db.close();
});