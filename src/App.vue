<template>
    <Header>
        <template #topline>
            <Topline></Topline>
        </template>
        <template #content>
            <Content :users="users"></Content>
        </template>
    </Header>
    <main>
        <router-view/>
    </main>
</template>

<script>
import Header from '@/components/Header/Header'
import Topline from '@/components/Header/Topline'
import Content from '@/components/Header/Content'

import users from '@/assets/json/users.json'

export default {
    components: {
        Header,
        Topline,
        Content
    },
    data: () => ({
        users
    })
}
</script>
<style lang="scss" src="./assets/scss/common.scss"></style>
