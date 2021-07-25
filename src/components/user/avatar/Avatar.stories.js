import Avatar from './Avatar.vue'
export default {
    title: 'Avatar',
    components: { Avatar }
}

export const defaultView = () => ({
    components: { Avatar },
    template: `
        <Avatar 
            src="https://picsum.photos/200/200"
            username="ХУй"
            width="44"
            height="44"
        />
    `
})
