<template>
    <section class="wrapBox">
        <div class="bgImg">
            <div class="innerBox">
                <p class="title">Welcome To Visit <br/> My Personal Website!</p>
                <div class="button" @click="handelClick">Learn More About Me</div>
                <p class="bottom-p">Time goes by, there is no end, only the intersection.</p>
                <!--<p class="bottom-p">I stay up all night addiction, but can not change your good night.</p>-->
            </div>
        </div>

    </section>
</template>

<script>
    export default {
        name: "SkinLayer",
        methods: {
            handelClick () {
                this.$emit('turnInto')
            }
        }
    }
</script>

<style lang="less" scoped>
    .wrapBox {
        width: 100%;
        min-height: 810px;
        height: 100%;
        position: absolute;
        .bgImg{
            width: 100%;
            height: 100%;
            background: url("/img/bg4.jpg") no-repeat center center;
            background-size: auto 100%;
           // background: #806d9e;
            .innerBox{
                width: 100%;
                height: 100%;
                overflow: hidden;
                background-color: rgba(0,0,0,0.4);
                .title{
                    width: 600px;
                    color: #fff;
                    text-shadow: 2px 2px 2px #6cf;
                    font-size: 50px;
                    text-align: center;
                    line-height: 70px;
                    margin: 200px auto 0;
                    font-family: "Sitka Small";
                    word-spacing: 15px;
                }
                .button{
                    width: 230px;
                    height: 50px;
                    position: absolute;
                    top: 200px;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    margin: auto;
                    border-radius: 8px;
                    color: #fff;
                    line-height: 50px;
                    text-align: center;
                    border: 1px solid #fff;
                    &:hover{
                        color: #000;
                        background: #fff;
                        cursor: pointer;
                    }
                }
                .bottom-p{
                    font-family: "Sitka Small";
                    color: #fff;
                    position: absolute;
                    bottom: 30px;
                    right: 50px;
                }
            }
        }


    }
</style>
