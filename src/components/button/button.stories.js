import Button from './button.vue'
export default {
    title: 'Button',
    components: { Button }
}

export const defaultView = () => ({
    components: { Button },
    template: `
        <Button>
            Follow
        </Button>
    `
})
