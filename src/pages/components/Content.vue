<template>
    <div class="content">
        <Triangle/>
        <div class="content-inner"></div>
        <Triangle :direction="false" :height="90"/>
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
    margin: -90px auto 50px;
    position: relative;
    z-index: 99;
    .content-inner{
        width: 100%;
        min-height: 1200px;
        background-color: #fff;
    }
}
</style>
