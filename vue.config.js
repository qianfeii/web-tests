const express = require('express')
const Mock = require('mockjs')
const app = express()
const statusData = require('./src/assets/data.json').status
const routes = express.Router()
app.use('/api', routes)
const serverConfig = {
  devServer: {
    host: '0.0.0.0',
    port: 8000,
    before(app) {
      app.get('/api/status', (req, res) => {
        res.json({
          error: 0,
          data: statusData
        })
      })
      app.get('/api/mock', (req, res) => {
        res.json(
          Mock.mock({
            error: 0,
            'data|1-9': [
              {
                'name|5-8': /[a-zA-Z]/,
                'id|+1': 1,
                type: 'mock',
                'boolean|1': true,
                date: '@DATE("yyyy-MM-dd")'
              }
            ]
          })
        )
      })
    }
  }
}
module.exports = serverConfig
