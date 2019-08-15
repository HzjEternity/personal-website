<template>
    <div class="particles">
        <canvas ref="particles"  id="canvas"></canvas>
    </div>
</template>

<script>
    import Particles from 'particlesjs'
    export default {
        name: "Particles",
        methods: {
            initParticles () {
                let number = 200
                const width = document.body.clientWidth
                if (width < 500) {
                    number = Math.floor((width / 1200) * 200)
                }
                Particles.init({
                    selector: '#canvas',
                    maxParticles: number,
                    sizeVariations: 3,
                    speed: 0.3,
                    color:'#ddb95c',
                    minDistance: 80,
                    connectParticles: false,
                    responsive: null
                })
            }
        },
        mounted () {
            this.initParticles()
        }
    }
</script>

<style lang="less" scoped>
.particles{
    width: 100%;
    height: 320px;
    position: absolute;
    top: 0;
    left: 0;
}
</style>
