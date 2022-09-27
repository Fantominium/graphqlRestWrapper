module.exports = {
    Query: {
      hello: () => {
        return "hello world"
      }, 
      getCharacters: (_, __, { dataSources }) =>  dataSources.rickAndMortyAPI.getCharacters(),
      getUsers: (_, __, { dataSources }) =>  dataSources.usersApi.listUsers(),
      getTodos: (_, __, { dataSources }) => dataSources.todosApi.listTodos(),
      findTodo:  (_, {id}, { dataSources }) => dataSources.todosApi.find(id),
      deleteTodo:  (_, __, { dataSources }) => dataSources.todosApi.delete(id),
    },
    Mutation: {
      createUser: (_, __, { dataSources }) =>  {
        console.log(_, 'args' )
        console.log(__, 'params')
        dataSources.usersApi.create(__)
      },

    }
  }