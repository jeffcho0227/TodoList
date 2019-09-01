const express = require('express');
const parser = require('body-parser');
const path = require('path');
const graphqlHTTP = require('express-graphql');

const schema = require('../apolloServer/schema.js')

const app = express();
const port = 3000;
// const Router = require('./router.js')

app.use(parser.json());
app.use(parser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, '../../client/dist')));
app.use('/graphql', graphqlHTTP({
  schema, 
  graphiql: true
}))


app.listen(port, () => {
  console.log(`listening on port ${port}`)
});