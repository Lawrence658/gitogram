import header from './header.vue'
import topline from './topline/topline.vue'
import content from './content/content.vue'


import users from '@/assets/json/users.json'

export default {
    title: 'header',
    components: { header, topline, content }
}

export const defaultView = () => ({
    components: { header, topline, content },
    data: () => ({
        users
    }),
    template: `
        <header>
            <topline />
            <content :users="users" />
        <header />
    `
})
