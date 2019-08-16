<template>
    <div ref="paintBox" :height="height" class="paint-box">
        <canvas ref="triangle" :height="height"></canvas>
    </div>
</template>

<script>
    import {paintingPic} from '../../tools/index'
    export default {
        name: "Triangle",
        props: {
            direction:{
                default: true,
                type: Boolean
            },
            height: {
                type: Number,
                default: 180
            }
        },
        methods: {
            triangle () {
                const width = this.$refs.paintBox.offsetWidth
                this.$refs.triangle.width = width
                const ctx = this.$refs.triangle.getContext("2d")
                if (this.direction) {
                    paintingPic(ctx, width, this.height)
                    return
                }
                this.painting(ctx, width, this.height)

            },
            painting (ctx, width, height) {
                ctx.beginPath()
                ctx.moveTo(0, 0)
                ctx.lineTo(width, 0)
                ctx.lineTo(width / 2, height)
                ctx.fillStyle = '#fff'
                ctx.fill()
            }
        },
        mounted () {
            const {triangle} = this
            triangle()
            window.addEventListener('resize',triangle)
        }
    }
</script>

<style lang="less" scoped>
.paint-box{
    width: 100%;
    canvas{
        display: block;
    }
}
</style>
