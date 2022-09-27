import axios from 'axios'
import shortid from 'shortid'
import {Todos} from "./db.json"

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
      async find(id) {
        const {data} = await this.api.get(`/todos/${id}`)
        return data;
      }
      delete(id) {
        return this.api.delete(`/todos/${id}`).then(() => ({ id }))
      }
}
module.exports = Todo