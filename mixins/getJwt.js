import Vue from 'vue'

Vue.mixin({
    data() {
        return {
            jwt: null
        }
    },
    methods: {
        getUsers() {
            const user = JSON.parse(localStorage.getItem("user"))
            this.jwt = user.accessToken
        }
    }
})