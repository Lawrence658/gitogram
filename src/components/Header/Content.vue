<template>
    <div class="content">
        <ul class="story-user-list">
            <li v-for="user in users" :key="user.id">
                <StoryUserItem :user="user"></StoryUserItem>
            </li>
        </ul>
    </div>
</template>
<script>
import StoryUserItem from './StoryUserItem.vue'

export default {
    props: ['users'],
    components: {
        StoryUserItem
    }
}
</script>

<style lang="scss">
    .story-user-list {
        padding: 0;
        margin: 0;
        display: flex;
        justify-content: space-between;
        list-style-type: none;
        li {
            &:last-child {
                margin-right: 0;
            }
        }
    }
</style>
