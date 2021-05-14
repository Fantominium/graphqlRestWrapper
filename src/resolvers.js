module.exports = {
    Query: {
      hello: () => {
        return "hello world"
      }, 
      getCharacters: (_, __, { dataSources }) =>  dataSources.rickAndMortyAPI.getCharacters()
    } 
  }