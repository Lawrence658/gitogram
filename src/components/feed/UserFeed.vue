<template>
    <div class="feed-card">
        <div class="feed-header">
            <picture>
                <img width="44" height="44" src="../../assets/img/png/users/andrew.png" alt="">
            </picture>
            <span class="username">joshua_l</span>
        </div>
        <div class="feed-body">
            <h2 class="feed-title">Vue.js</h2>
            <p><b>JavaScript</b> framework for building interactive web applications ⚡</p>
            <div class="activity">
                <button class="btn activity-item">
                    <icon name="star"></icon>
                    <span>Star</span>
                </button>
                <div class="activity-item">
                    <span>156k</span>
                </div>
                <button class="btn activity-item">
                    <icon name="fork"></icon>
                    <span>Fork</span>
                </button>
                <div class="activity-item">
                    <span>4</span>
                </div>
            </div>
        </div>
        <div class="feed-footer">
            <button class="btn btn-comments" :class="{ active: isShow }" @click="isShow = !isShow">
                <span class="text">{{ isShow ? 'Hide' : 'Show' }} issues</span>
                <icon name="angleDown"></icon>
            </button>
            <div class="comments" v-show="isShow">
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
import icon from '@/components/icons/icon'

export default {
    components: {
        icon
    },
    data: () => ({
        isShow: false
    })
}
</script>

<style lang="scss">
    .feed-card {
        .feed-header {
            margin-bottom: 15px;
            display: flex;
            align-items: center;
            picture {
                display: block;
                margin-right: 15px;
            }
        }
        .feed-body {
            margin-bottom: 20px;
            padding: 25px 20px;
            background: #FFFFFF;
            border: 1px solid #F1F1F1;
            box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.07);
            border-radius: 10px;
        }
        .username {
            color: #262626;
        }
        .feed-title {
            color: #292929;
            font-size: 26px;
            margin-bottom: 15px;
        }
        p {
            color: #404040;
            margin-bottom: 35px;
        }
        .activity {
            display: inline-flex;
            border: 1px solid rgba(27, 31, 35, 0.15);
            border-radius: 6px;
            overflow: hidden;
            .btn {
                background-color: #FAFBFC;
            }
            .activity-item {
                padding: 6px 15px;
                display: flex;
                align-items: center;
                font-size: 14px ;
                border-right: 1px solid rgba(27, 31, 35, 0.15);
                &:last-child {
                    border-right: none;
                }
                .icon {
                    margin-right: 5px;
                }
            }
        }
        .btn-comments {
            display: flex;
            align-items: center;
            &.active {
                .icon {
                    transform: rotate(-180deg);
                }
            }
            .text {
                display: inline-block;
                margin-right: 5px;
            }
        }
        .comments {
            margin-top: 15px;
            .comment-item {
                display: flex;
                font-size: 14px;
                margin-bottom: 10px;
                &:last-child {
                    margin-bottom: 0;
                }
                .outher-username {
                    display: inline-block;
                    font-weight: 700;
                    margin-right: 10px;
                }
            }
        }
        .feed-date {
            margin-top: 15px;
            display: block;
            font-size: 14px;
            text-transform: uppercase;
            color: rgba($color: #000000, $alpha: .4);
        }
    }
</style>
