
const { gql } = require("apollo-server")
const typeDefs = gql`

type Info {
        count: Int,
        pages: Int,
        next: String
        prev: String
}
type Todo {
  id: ID,
  content: String,
  category: String,
  completed: Boolean,
}

type Chararters {
    id: ID
    name: String
    status: String
    species: String
    type: String
    gender: String
    image: String
    url: String
    created: String
}

type AllCharacters {
    info: Info
    characters: [Chararters]
}


type User {
  id: ID,
  name: String
  lastName: String
 
}

input CreateUserInput {
  name: String
  lastName: String
}

  type Query {
    hello: String
    getCharacters: AllCharacters
    getUsers: [User]
    getTodos: [Todo]
  }


  type Mutation {
    createUser(input: CreateUserInput!): User
  }
 

`
module.exports = typeDefs