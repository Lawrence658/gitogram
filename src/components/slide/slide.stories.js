import slide from './slide.vue'
export default {
    title: 'slide',
    components: { slide }
}

export const defaultView = () => ({
    components: { slide },
    template: `
        <slide />
    `
})
