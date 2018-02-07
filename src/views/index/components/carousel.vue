<template>
    <div class="carouselPlay">
        <Carousel autoplay v-model="value" loop>
            <CarouselItem>
                <div class="demo-carousel">
                    <img src="@/../static/images/one.png" alt="">
                </div>
            </CarouselItem>
            <CarouselItem>
                <div class="demo-carousel">
                    <img src="@/../static/images/two.jpeg" alt="">
                </div>
            </CarouselItem>
            <CarouselItem>
                <div class="demo-carousel">
                    <img src="@/../static/images/three.png" alt="">
                </div>
            </CarouselItem>
        </Carousel>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                value: 0
            }
        }
    }
</script>
<style>
    .carouselPlay {
        width: 1000px;
        height: 500px;
        display: flex;
        flex-direction: row;
        align-self: center;
    }
    .ivu-carousel {}
    .demo-carousel {
        width: 1000px;
        height: 500px;
    }
    .ivu-carousel {
        width: 1000px;
        height: 500px;
    }
</style>

