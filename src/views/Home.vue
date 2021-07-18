<template>
    <section class="home-page">
        <section class="users-feeds">
            <div class="container">
                <UserFeed></UserFeed>
            </div>
        </section>
    </section>
</template>

<script>
import UserFeed from '@/components/feed/UserFeed'

export default {
    name: 'Home',
    components: {
        UserFeed
    }
}
</script>
