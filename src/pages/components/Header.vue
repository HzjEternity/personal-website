<template>
    <header class="header">
       <section class="header-inner">
           <span  class="icon-search1 smallBtn"></span>
           <span @click="switchIcon" v-if="!showMenu" class="icon-uniE901 smallBtn"></span>
           <span @click="switchIcon" v-else class="icon-uniE902 smallBtn"></span>
           <nav class="nav no-select" >
               <ul class="warp-ul" :class="showMenu?'active': ''">
                   <li class="tag"><span>Home</span></li>
                   <li class="tag">
                       <span>Work</span>
                   </li>
                   <li class="tag">
                       <span>Blog</span>
                   </li>
                   <li class="tag">
                       <span>Hobby</span>
                       <ul class="item">
                           <li class="angle"></li>
                           <li>Music</li>
                           <li>Photograph</li>
                           <li>FingerStyle Guitar</li>
                       </ul>
                   </li>
                   <li class="tag">
                       <span>Contact</span>
                   </li>
               </ul>
           </nav>
       </section>
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
    height: 320px;
    z-index: 99;
    position: relative;
    .header-inner{
        width: 100%;
        height: 80px;
        position: relative;
        color: #fff;
        .nav{
            height:320px;
            width: 500px;
            position: absolute;
            top: 0;
            right: 120px;

            .warp-ul{
                width: 100%;
                height: 80px;
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
                .tag {
                    height: 100%;
                    span{
                       line-height: 80px;
                   }
                    .item{
                        display: none;
                        position: absolute;
                        padding: 12px 0;
                        width: 180px;
                        top:80px;
                        border-radius: 4px;
                        background-color: #fff;
                        color: #000;
                        .angle{
                            padding: 0;
                            margin: 0;
                            position: absolute;
                            top: -20px;
                            left: 10px;
                            width: 0;
                            height: 0;
                            border: 10px solid transparent;
                            border-bottom-color: #fff;
                        }
                        li{
                            padding: 8px 15px;
                            &:hover{
                                background:rgba(0,0,0,0.1) ;
                            }
                        }

                    }
                    &:hover{
                        span{
                            cursor: pointer;
                            text-decoration: underline;
                            color: #b1d33e;

                        }
                        .item{
                            display: block;
                        }
                    }
                }

            }
        }
        .smallBtn{
            font-size: 30px;
            line-height: 80px;
            position: relative;
            z-index: 99;
        }
        .icon-search1{
            margin-left: 30px;
        }
        .icon-uniE901,.icon-uniE902{
            float: right;
            margin-right: 40px;
        }
    }
}
</style>
