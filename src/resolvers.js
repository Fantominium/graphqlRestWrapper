module.exports = {
    Query: {
      hello: () => {
        return "hello world"
      }, 
      getCharacters: (_, __, { dataSources }) =>  dataSources.rickAndMortyAPI.getCharacters(),
      getUsers: (_, __, { dataSources }) =>  dataSources.usersApi.listUsers(),
      getTodos: (_, __, { dataSources }) => dataSources.todosApi.listTodos(),
    },
    Mutation: {
      createUser: (_, __, { dataSources }) =>  {
        console.log(_, 'args' )
        console.log(__, 'params')
        dataSources.usersApi.create(__)
      },
    }
  }