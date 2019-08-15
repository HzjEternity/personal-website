<template>
    <div ref="paintBox" class="paint-box">
        <canvas ref="triangle" width="900" height="180"></canvas>
    </div>
</template>

<script>
    import {paintingPic} from '../../tools/index'
    export default {
        name: "Triangle",
        methods: {
            triangle () {
                const width = this.$refs.paintBox.offsetWidth
                const height =  this.$refs.triangle.height
                this.$refs.triangle.width = width
                const ctx = this.$refs.triangle.getContext("2d")
                this.painting(ctx, width, height)
            },
            painting (ctx, width, height) {
                paintingPic(ctx, width, height)
            }
        },
        mounted () {
            const {triangle} = this
            triangle()
            window.addEventListener('resize',triangle)
            /*window.onresize =function () {
                triangle()
            }*/
        }
    }
</script>

<style lang="less" scoped>
.paint-box{
    height: 180px;
    width: 100%;
}
</style>
