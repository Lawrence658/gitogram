<template>
    <div class="auth-page">
        <div class="wrapper">
            <Logo />
            <p class="description">
                More than just one repository.
                This is our digital world.
            </p>
            <Button class="on-auth" @click="onAuth()">
                Authorize with github
                <Icon name="github" />
            </Button>
            <picture class="mac">
                <img src="../../assets/img/png/mac.png" alt="">
            </picture>
        </div>
        <div class="bottom-strip">
            <p>© Gitogram from Loftschool</p>
        </div>
    </div>
</template>

<script>


import Button from '@/components/button/button.vue'
import Logo from '@/components/header/topline/logo/logo.vue'
import Icon from '@/components/icons/icon.vue'

import axios from 'axios'

import env from '../../../env.js'

export default {
    components: {
        Logo, Button, Icon
    },
    methods: {
        onAuth() {
            const gitHubAuthApi = 'https://github.com/login/oauth/authorize'

            const params = new URLSearchParams()

            params.append('client_id', env.clientId)
            params.append('scope', 'repo:status read:user')

            window.location.href = `${gitHubAuthApi}?${params}`
        }
    },
    async mounted() {
        const code = new URLSearchParams(window.location.search).get('code')

        console.log(code)

        if(code) {
            try {
                const responce = await axios.post('http://localhost:8080', JSON.stringify({
                    clientId: env.clientId,
                    code,
                    clientSicret: env.clientSicret
                }))
                
                const { token } = await responce.json()
                console.log(token)
            } catch (error) {
                console.log(error)
            }
        }
    }
}
</script>

<style lang="scss" src="./auth.scss">

</style>