<template>
    <div class="feed-card">
        <div class="feed-header">
            <avatar
                :username="feed.username"
                :src="feed.avatarUrl"
                width="44"
                height="44"
            />
        </div>
        <div class="feed-body">
            <slot name="article" />
        </div>
        <div class="feed-footer">
            <toggler @onClickToggler="onClickToggler" />
            <div class="comments" v-show="isShowComments">
                <div class="comment-item">
                    <span class="outher-username">joshua_l</span>
                    <span class="outher-user-comment">Enable performance measuring in production, at the user's request</span>
                </div>
                <div class="comment-item">
                    <span class="outher-username">Camille</span>
                    <span class="outher-user-comment">It's Impossible to Rename an Inherited Slot</span>
                </div>
                <div class="comment-item">
                    <span class="outher-username">Marselle</span>
                    <span class="outher-user-comment">transition-group with flex parent causes removed items to fly</span>
                </div>
            </div>
            <span class="feed-date">15 may</span>
        </div>
    </div>
</template>

<script>
import * as api from '@/api'

import avatar from '@/components/avatar/avatar'
import toggler from './toggler/toggler.vue'

export default {
    props: {
        feed: Object
    },
    components: {
        avatar,
        toggler
    },
    data: () => ({
        isShowComments: false
    }),
    methods: {
        onClickToggler(payload) {
            console.log(payload)
            this.isShowComments = payload
        }
    },
    created () {
        api.trandings.getTrandings()
    }
}
</script>

<style lang="scss" src="./feed.scss"></style>
