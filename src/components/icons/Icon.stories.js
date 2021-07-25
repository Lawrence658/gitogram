import Icon from './Icon.vue'
export default {
    title: 'Icon',
    components: { Icon }
}

export const defaultView = () => ({
    components: { Icon },
    template: `
        <Icon />
    `
})
