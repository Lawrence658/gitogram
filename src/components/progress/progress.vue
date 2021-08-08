<template>
    <div class="progress-line">
        <div :class="['progress', { 'acrive': active }]"></div>
    </div>
</template>

<script>
export default {
    data: () => ({
        active: false
    })
}
</script>

<style lang="scss" src="./progress.scss"></style>