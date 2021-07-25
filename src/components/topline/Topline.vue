<template>
    <div class="topline">
        <router-link to="/">
            <picture>
                <img src="../../assets/img/svg/logo.svg" alt="Gitogram">
            </picture>
        </router-link>
        <div class="actions">
            <router-link class="btn" to="/">
                <Icon name="home" />
            </router-link>
            <router-link class="btn" to="/">
                <picture>
                    <img src="../../assets/img/png/user.png" alt="User">
                </picture>
            </router-link>
            <button class="btn">
                <Icon name="exit" />
            </button>
        </div>
    </div>
</template>

<script>
import Icon from '@/components/icons/Icon'

export default {
    components: {
        Icon
    }
}
</script>

<style lang="scss">
    .topline {
        margin-bottom: 40px;
        // padding: ;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .actions {
            .btn {
                margin-right: 25px;
                &:last-child {
                    margin-right: 0;
                }
            }
        }
    }
</style>
