const graphql = require('graphql');
const todoModel = require('../../database/index.js');

const { 
  GraphQLObjectType, GraphQLString, 
  GraphQLID, GraphQLInt,GraphQLSchema, 
  GraphQLList,GraphQLNonNull 
} = graphql;

//Schema defines data on the Graph like object types(book type), relation between 
//these object types and descibes how it can reach into the graph to interact with 
//the data to retrieve or mutate the data   

const ListType = new GraphQLObjectType({
    name: 'List',
    fields: () => ({
        id: { type: GraphQLID  },
        Title: { type: GraphQLString }, 
        Location: { type: GraphQLString },
        TimeInterval: { type: GraphQLString },
        Note: { type: GraphQLString }, 
        // resolve(parent, arg) {
        //   return todoModel.find({});
        // }
    })
});

//RootQuery describe how users can use the graph and grab data.
//E.g Root query to get all authors, get all books, get a particular book 
//or get a particular author.
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        list: {
          type: new GraphQLList(ListType), 
          resolve(parent, arg) {
            return todoModel.find({});
          }
        }
    }
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
      addList: {
          type: ListType,
          args: {
              //GraphQLNonNull make these field required
              Title: { type: new GraphQLNonNull(GraphQLString) },
              Location: { type: new GraphQLNonNull(GraphQLString) }, 
              TimeInterval: { type: new GraphQLNonNull(GraphQLString) }, 
              Note: { type: new GraphQLNonNull(GraphQLString) }
          },
          resolve(parent, args) {
              let List = new todoModel({
                  Title: args.Title,
                  Location: args.Location,
                  TimeInterval: args.TimeInterval,
                  Note: args.Note
              });
              return List.save();
          }
      }
  }
});
 
//Creating a new GraphQL Schema, with options query which defines query 
//we will allow users to use when they are making request.
module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});