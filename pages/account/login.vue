<template>
  <div>
    <h1>Register</h1>
    <form action="" @submit.prevent="handleSubmit">
      <div>
        <label for="email">Email</label>
        <input v-model="formLogin.email" type="text" name="email" />
      </div>
      <div>
        <label for="password">Password</label>
        <input v-model="formLogin.password" type="text" name="password" />
      </div>
      <button type="submit">Login</button>
    </form>
    <button @click="getUser">Get User</button>
    <h2 v-if="loading">Loading...</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formLogin: {
        email: '',
        password: '',
      },
      loading: false,
    }
  },
  mounted() {
    this.getUsers()
  },
  methods: {
    async getUser() {
      try {
        const res = await this.service({
          path: '/users',
          method: 'get',
        })
        // eslint-disable-next-line no-console
        console.log('resGetUser', res)
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log('errorGetUser', error)
      }
    },
    async handleSubmit() {
      await this.postLoginApiRequest()
    },
    async postLoginApiRequest() {
      this.loading = true
      try {
        const res = await this.service({
          path: `/login`,
          method: 'post',
          body: this.formLogin,
        })
        const userLocalStorage = {
          user: res.data.data.user,
          accessToken: res.data.data.accessToken,
        }
        if (res.data.data) {
          localStorage.setItem('user', JSON.stringify(userLocalStorage))
          window.document.cookie = `refresh-token=${res.data.data.refreshToken}`
        }
        this.loading = false
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log('errorPostLogin', error.response)
      }
    },
  },
}
</script>
