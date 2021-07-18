<template>
    <router-link to="/" class="story-user-item">
        <picture>
            <img src="../../assets/img/png/users/josh.png" :alt="user.username">
        </picture>
        <span class="username">{{ user.username }}</span>
    </router-link>
</template>
<script>
export default {
    props: ['user'],
    data: () => ({
        href: window.location.href
    }),
    mounted () {
        console.log(window.location.href)
    }
}
</script>

<style lang="scss">
    .story-user-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        // &:hover {
        //     picture {
        //         border-color: transparent;
        //     }
        // }
        picture {
            margin-bottom: 10px;
            padding: 4px;
            display: flex;
            border: 2px solid #A6328D;
            border-radius: 50%;
            transition: all .2s ease-in-out;
        }
        .username {
            font-size: 12px;
        }
    }
</style>
