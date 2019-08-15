<template>
    <header class="header">
        <span class="icon-search1 smallBtn"></span>
        <span @click="switchIcon" v-if="!showMenu" class="icon-uniE901 smallBtn"></span>
        <span @click="switchIcon" v-else class="icon-uniE902 smallBtn"></span>
        <nav class="nav no-select" >
            <ul :class="showMenu?'active': ''">
                <li>Home</li>
                <li>About</li>
                <li>Blog</li>
                <li>Hobby</li>
                <li>Contact</li>
            </ul>
        </nav>
    </header>
</template>

<script>
    import searchImg from '../../assets/img/search.png'
    export default {
        name: "Header",
        data () {
            return {
                searchImg: searchImg,
                showMenu: false
            }
        },
        methods: {
            switchIcon () {
                this.showMenu = !this.showMenu
            }
        }
    }
</script>
<style lang="less" scoped>
.header{
    width: 100%;
    height: 80px;
    position: relative;
    z-index: 99;
    color: #fff;
    .nav{
        height: 100%;
        width: 500px;
        position: absolute;
        top: 0;
        right: 120px;
        overflow: hidden;
        ul{
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: space-around;
            align-items: center;
            transform: translateX(500px);
            transition: transform  linear 0.2s;
            opacity: 0;
            &.active{
                transform: translateX(0);
                opacity: 1;
            }
            li:hover{
                cursor: pointer;
                text-decoration: underline;
                color: #b1d33e;
            }
        }
    }
    .smallBtn{
        font-size: 30px;
        line-height: 80px;
    }
    .icon-search1{
        margin-left: 30px;
    }
    .icon-uniE901,.icon-uniE902{
        float: right;
        margin-right: 40px;
    }
}
</style>
