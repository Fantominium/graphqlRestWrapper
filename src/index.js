require("dotenv").config()
import  RickAndMortyAPI from "./datasources/RickAndMortyAPI"
import User from './datasources/User'
import Todo from './datasources/Todo'
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import typeDefs from "./schema"

import resolvers from "./resolvers"
const server = new ApolloServer({ 
    dataSources: () => ({
        rickAndMortyAPI: new RickAndMortyAPI(),
        usersApi: new User(),
        todosApi: new Todo(),
    }),
    typeDefs, 
    resolvers 
})


const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4001 }, () =>
  console.log(`🚀 Server ready at http://localhost:4001${server.graphqlPath}`)
);