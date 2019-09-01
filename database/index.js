const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todolistgql');

mongoose.promise = global.promise;

const toDoListGqlSchema = new mongoose.Schema({
  Title: {type: String},
  Location: {type: String},
  TimeInterval: {type: String},
  Note: {type: String}
});

const toDoListGqlModel = mongoose.model('toDoListGqlModel', toDoListGqlSchema);

module.exports = toDoListGqlModel;