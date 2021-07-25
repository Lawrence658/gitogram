<template>
    <div class="avatar-component">
        <picture>
            <img v-bind="$attrs" class="user-avatar" :src="src" alt="">
        </picture>
        <span v-if="username" class="username">{{ username }}</span>
    </div>
</template>

<script>
export default {
    props: {
        src: String,
        username: String
    },
    mounted() {
        console.log(window.location)
    }
}
</script>

<style lang="scss">
.avatar-component {
    display: flex;
    align-items: center;
    .user-avatar {
        max-width: 100%;
        height: auto;
        object-fit: cover;
        border-radius: 50%;
        margin-right: 14px;
    }
    .username {
        font-size: 18px;
        font-weight: 700;
    }
}
    
</style>
