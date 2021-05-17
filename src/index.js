require("dotenv").config()
import  RickAndMortyAPI from "./datasources/RickAndMortyAPI"
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import typeDefs from "./schema"

import resolvers from "./resolvers"
const server = new ApolloServer({ 
    dataSources: () => ({
        rickAndMortyAPI: new RickAndMortyAPI()
    }),
    typeDefs, 
    resolvers 
})


const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4001 }, () =>
  console.log(`🚀 Server ready at http://localhost:4001${server.graphqlPath}`)
);