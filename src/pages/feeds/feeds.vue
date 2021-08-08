<template>
    <section class="home-page">
        <section class="users-feeds">
            <div class="container">
                <feed
                    v-for="feed in feeds"
                    :key="feed.id"
                    :feed="getFeedData(feed)"
                >
                    <template #article>
                        <div class="feed-article">
                            <h2 class="feed-title">{{ feed.title }}</h2>
                            <p>{{ feed.description }}</p>
                            <activity :starsCount="feed.stargazers_count" :forksCount="feed.forks_count" />
                        </div>
                    </template>
                </feed>
            </div>
        </section>
    </section>
</template>

<script>
import feed from '@/components/feed/feed'
import activity from '@/components/feed/activity/activity.vue'

import * as api from '../../api'

export default {
    name: 'Feeds',
    data: () => ({
        feeds: []
    }),
    components: {
        feed,
        activity
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