<template>
    <div class="content">
        <Triangle/>
        <div class="content-inner"></div>
    </div>
</template>

<script>
    import Triangle from './Triangle'
    export default {
        name: "Content",
        components: {Triangle}

    }
</script>

<style lang="less" scoped>
.content {
    width: 100%;
    margin: 150px auto 0;
    position: relative;
    z-index: 99;
    .content-inner{
        width: 100%;
        min-height: 1200px;
        background-color: #fff;
    }
}
</style>
