import Progress from './progress.vue'
export default {
    title: 'Progress',
    components: { Progress }
}

export const defaultView = () => ({
    components: { Progress },
    template: `
        <Progress />
    `
})
