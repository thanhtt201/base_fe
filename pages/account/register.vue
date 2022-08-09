<template>
    <div>
        <h1>Register</h1>
        <form action="" @submit.prevent="handleSubmit">
            <div>
                <label for="email">Email</label>
                <input v-model="formRegister.email" type="text" name="email">
            </div>
            <div>
                <label for="password">Password</label>
                <input v-model="formRegister.password" type="text" name="password">
            </div>
            <button type="submit">Register</button>
        </form>
        <h2 v-if="loading">Loading...</h2>
    </div>
</template>

<script>
export default {
    data() {
        return {
            formRegister: {
                email: '',
                password: ''
            },
            loading: false
        }
    },
    methods: {
        async handleSubmit() {
            // eslint-disable-next-line no-console
            console.log('data', this.formRegister);
            await this.postRegisterApiRequest()
        },
        async postRegisterApiRequest() {
            this.loading = true
            // eslint-disable-next-line no-console
            try {
                const res = await this.service({
                    path: `/register`,
                    method: 'post',
                    body: this.formRegister
                })
                // eslint-disable-next-line no-console
                console.log('res', res)
                this.loading = false
            } catch (error) {
                // eslint-disable-next-line no-console
                console.log('error', error.response)
            }
        }
    }
}
</script>