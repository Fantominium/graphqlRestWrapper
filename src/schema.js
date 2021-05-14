
const { gql } = require("apollo-server")
const typeDefs = gql`

type Info {
        count: Int,
        pages: Int,
        next: String
        prev: String
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

  type Query {
    hello: String
    getCharacters: AllCharacters
  }

 

`
module.exports = typeDefs