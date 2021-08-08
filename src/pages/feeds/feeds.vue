<template>
    <section class="home-page">
         <Header>
            <template #topline>
                <Topline />
            </template>
            <template #content>
                <Content :users="users" />
            </template>
        </Header>
        <section class="users-feeds">
            <div class="container">
                <Feed
                    v-for="feed in feeds"
                    :key="feed.id"
                    :feed="getFeedData(feed)"
                >
                    <template #article>
                        <div class="feed-article">
                            <h2 class="feed-title">{{ feed.title }}</h2>
                            <p>{{ feed.description }}</p>
                            <Activity :starsCount="feed.stargazers_count" :forksCount="feed.forks_count" />
                        </div>
                    </template>
                </Feed>
            </div>
        </section>
    </section>
</template>

<script>
import Header from '@/components/header/header'
import Topline from '@/components/header/topline/topline'
import Content from '@/components/header/content/content'

import users from '@/assets/json/users.json'



import Feed from '@/components/feed/feed'
import Activity from '@/components/feed/activity/activity.vue'

import * as api from '../../api'

export default {
    name: 'Feeds',
    data: () => ({
        feeds: []
    }),
    components: {
        Header,
        Topline,
        Content,
        Feed,
        Activity
    },
    methods: {
        getFeedData(feed) {
            return {
                username: feed.owner.login,
                avatarUrl: feed.owner.avatar_url
            }
        }
    },
    async mounted() {
        try {
            const { data } = await api.trandings.getTrandings()
            console.log(data)
            this.feeds = data.items
        } catch(error) {
            console.log(error)
        }
    }
}
</script>


<style lang="scss">
    .users-feeds {
        max-width: 980px;
        margin: 0 auto;
    }
</style>