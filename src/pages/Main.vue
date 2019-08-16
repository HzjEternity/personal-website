<template>
    <section class="wrap">
        <Header/>
        <Particles/>
        <Content />
        <Footer/>
    </section>
</template>

<script>

    import Header from './components/Header'
    import Content from './components/Content'
    import Particles from './components/Particles'
    import Footer from './components/Footer'
    export default {
        name: "Main",
        components: {Content, Header, Particles, Footer},
        data () {
            return {
                isShowSkinLayer: true
            }
        },
        methods: {
            turnInto () {
                this.isShowSkinLayer = false
            }
        }
    }
</script>

<style lang="less" scoped>
.wrap{
    width: 100%;
    height: 100%;
    overflow-y: auto;
    &::-webkit-scrollbar{
        width:0;
        height:0;
    }
    background: url("/img/bg1.jpg") no-repeat center ;
    background-size:auto 100%;
    /*background-image: -webkit-linear-gradient(135deg, #49e3ce 0%, #9920ed 100%);*/
}

</style>
