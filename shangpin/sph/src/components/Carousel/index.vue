<template>
    <div class="swiper-container" id="floor2Swiper" ref="floor2Swiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item, index) in list" :key="item.id">
                <img :src="item.imgUrl" />
            </div>
            <!-- <div class="swiper-slide">
                                        <img src="./images/floor-1-b02.png" />
                                    </div>
                                    <div class="swiper-slide">
                                        <img src="./images/floor-1-b03.png" />
                                    </div> -->
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>

        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
    </div>
</template>

<script>
import Swiper from "swiper";

export default {
    name:'Carousel',
    props:['list'],
    watch: {
        list: {
            immediate:true,
            handler(newVal, oldVal) {
                this.$nextTick(() => {
                    var floor_swiper = new Swiper(this.$refs.floor2Swiper, {
                        loop: true,
                        pagination: {
                            el: ".swiper-pagination",
                            clickable: true,
                        },
                        navigation: {
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        },
                    });
                });
            },
        },
    },
};
</script>

<style></style>
