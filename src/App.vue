<template>
    <div id="app">
        <SkinLayer v-if="isShowSkinLayer" @turnInto="turnInto"/>
        <Main v-if="!isShowSkinLayer"/>
    </div>
</template>

<script>
    import SkinLayer from './pages/SkinLayer'
    import Main from './pages/Main.vue'

    export default {
        name: 'app',
        components: { Main, SkinLayer },
        data () {
            return {
                isShowSkinLayer: true
            }
        },
        created () {
            this.isShowSkinLayer = window.location.pathname === '/'
        },
        methods: {
            turnInto () {
                this.isShowSkinLayer = false
                history.pushState({}, '', `/main`)
            }
        }
    }
</script>

<style lang="less">
    html, body, #app {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

</style>
