<template>
    <header>
        <div class="container">
            <slot name="topline" />
            <slot name="content" />
        </div>
    </header>
</template>
<style lang="scss">
    header {
        padding: 37px 0;
        margin-bottom: 32px;
        background-color: #FAFAFA;
        box-shadow: 0px 0.33px 0px rgba(60, 60, 67, 0.29);
    }
</style>
