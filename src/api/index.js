import axios from 'axios'
export default {
  defaultApiGet: param => {
    return axios.get('', {
      params: param
    })
  },
  defaultApiPost: param => {
    return axios.post('', param)
  },
  getStatus: () => {
    return axios.get('api/status')
  },
  getMock: () => {
    return axios.get('/api/mock')
  }
}
