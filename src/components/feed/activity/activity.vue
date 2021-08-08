<template>
    <div class="activity">
        <div class="activity-item">
            <Icon name="star" />
            <span>Star</span>
        </div>
        <div class="activity-item">
            <span>{{ starsCount }}</span>
        </div>
        <div class="activity-item">
            <Icon name="fork" />
            <span>Fork</span>
        </div>
        <div class="activity-item">
            <span>{{ forksCount }}</span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        starsCount: {
            type: Number,
            default: 0
        },
        forksCount: {
            type: Number,
            default: 0
        }
    }
}
</script>