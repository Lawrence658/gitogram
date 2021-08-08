import feed from './feed.vue'
import activity from './activity/activity.vue'

export default {
    title: 'feed',
    components: { feed, activity }
}

export const defaultView = () => ({
    components: { feed , activity},
    template: `
        <feed>
            <template #article>
                <div class="feed-article">
                    <h2 class="feed-title">Vue.js</h2>
                    <p><b>JavaScript</b> framework for building interactive web applications ⚡</p>
                    <activity />
                </div>
            </template>
        </feed>
    `
})
