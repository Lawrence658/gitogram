<template>
    <Header>
        <template #topline>
            <Topline></Topline>
        </template>
        <template #users>
            <div class="users-wrap">
                <ul class="users-list">
                    <li v-for="user in users" :key="user.id">

                    </li>


                    <!-- <li v-for="user in users" :key="user.id">
                        <StoryUserItem :user="user"></StoryUserItem>
                    </li> -->
                </ul>
            </div>
        </template>
    </Header>
    <main>
        <router-view/>
    </main>
</template>

<script>
import Header from '@/components/header/Header'
import Topline from '@/components/header/Topline'
import Content from '@/components/header/Content'

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
