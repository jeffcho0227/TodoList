const model = require('./index.js');

const data = [
  {
    Title: 'learn db', 
    Location: 'Lake Elsinore',
    TimeInterval: '1 hour',
    Note: 'it\'s a simple review'
  }, 
  {
    Title: 'learn server', 
    Location: 'LA',
    TimeInterval: '2 hour',
    Note: 'it\'s a simple review'
  },
  {
    Title: 'learn React', 
    Location: 'Lake Elsinore',
    TimeInterval: '3 hour',
    Note: 'it\'s a simple review'
  }, 
  {
    Title: 'learn GraphQL', 
    Location: 'Lake Elsinore',
    TimeInterval: '5 hour',
    Note: 'learn new tech'
  }, 
  {
    Title: 'practice data structures', 
    Location: 'Lake Elsinore',
    TimeInterval: '4 hour',
    Note: 'get ready for the interview'
  }
];

model.create(data)
  .then(() => console.log('saved'))
  .catch(err => console.log(err));