import Vue from 'vue'
import axios from 'axios'

Vue.mixin({
  methods: {
    service(obj) {
      const service = axios.create({
        withCredentials: true,
        baseURL: 'http://localhost:3001/api',
        timeout: 3000,
      })

      service.interceptors.request.use(
        (config) => {
          if (config.url !== '/login' && config.url !== '/register') {
            config.headers = {
              Authorization: `Bearer ${this.jwt}`,
              Accept: 'application/json',
              'Content-Type': 'application/x-www-form-urlencoded',
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Methods':
                'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            }
          }
          return config
        },
        (error) => {
          Promise.reject(error)
        }
      )

      service.interceptors.response.use(
        (response) => {
          return response
        },
        async (error) => {
          if (
            error.response.status === 401 &&
            error.response.data === 'Token hết hạn'
          ) {
            const {
              data: {
                data: { accessToken, refreshToken },
              },
            } = await this.service({
              path: '/refresh-token',
              method: 'get',
            })
            if (accessToken && refreshToken) {
              axios.defaults.headers.Authorization = 'Bearer ' + accessToken;
              window.document.cookie = `refresh-token=${refreshToken}`
            }
          }
          return Promise.reject(error.response)
        }
      )

      const onError = function (error) {
        return error
      }

      const onSuccess = function (response) {
        return response
      }

      if (obj.method === 'get') {
        return service.get(obj.path).then(onSuccess).catch(onError)
      }

      if (obj.method === 'post') {
        return service.post(obj.path, obj.body).then(onSuccess).catch(onError)
      }

      if (obj.method === 'put') {
        return service.put(obj.path, obj.body).then(onSuccess).catch(onError)
      }

      if (obj.method === 'delete') {
        return service.delete(obj.path, obj.body).then(onSuccess).catch(onError)
      }
    },
  },
})
