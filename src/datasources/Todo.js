import axios from 'axios'
import shortid from 'shortid'

class Todo {
    constructor() {
        this.api = axios.create({
          baseURL: 'http://localhost:3000' // json-server endpoint
        })
      }
      async listTodos() {

        const response =  await this.api.get('/todos')
    
         console.log(response.data, "Data")
         return response.data || {"nothing": String};
      }
      find(id) {
        return this.api.get(`/todos/${id}`).then(res => res.data)
      }
}
module.exports = Todo