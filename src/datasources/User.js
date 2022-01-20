   
import axios from 'axios'
import shortid from 'shortid'
class User {
  constructor() {
    this.api = axios.create({
      baseURL: 'http://localhost:3000' // json-server endpoint
    })
  }

  async listUsers() {

    const response =  await this.api.get('/users')

     console.log(response.data, "Data")
     return response.data || {};
  }

  find(id) {
    return this.api.get(`/users/${id}`).then(res => res.data)
  }

  create(data) {
    console.log(data, 'data')
    const userWithId = {
      name: data.input.name,
      lastName: data.input.lastName,
      id: shortid.generate(),
    }
    return this.api.post('/users', userWithId).then(res => res.data)
  }

  update(id, data) {
    return this.api.patch(`/users/${id}`, data).then(res => res.data)
  }

  delete(id) {
    return this.api.delete(`/users/${id}`).then(() => ({ id }))
  }
}

module.exports = User