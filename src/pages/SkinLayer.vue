<template>
    <section class="wrapBox">
        <div class="bgImg">
            <div class="innerBox">
                <p class="title">Welcome To Visit <br/> My Personal Website!</p>
                <div class="button" @click="handelClick">Learn More About Me</div>
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
        height: 100%;
        position: absolute;
        .bgImg{
            width: 100%;
            height: 100%;
            background: url("/img/bg.jpg") no-repeat;
            .innerBox{
                width: 100%;
                height: 100%;
                overflow: hidden;
                background-color: #000000a8;
                .title{
                    width: 600px;
                    color: #fff;
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
            }
        }


    }
</style>
