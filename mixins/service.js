import Vue from 'Vue'
import axios from 'axios'

Vue.mixin({
    methods: {
        service(obj) {
            const instance = axios.create({
                baseURL: "http://localhost:3001",
                timeout: 3000
            })
            return instance
        }
    }
})
