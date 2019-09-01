const model = require('./index.js');

const findAllHelper = () => {
  return model.find();
};

const addToDo = ({ Title, Location, TimeInterval, Note }) => {
  return model.create({
    Title, 
    Location, 
    TimeInterval, 
    Note
  });
};

const deleteToDo = (id) => {
  return model.deleteMany({_id: id});
};

module.exports = {
  findAllHelper,
  addToDo,
  deleteToDo
}