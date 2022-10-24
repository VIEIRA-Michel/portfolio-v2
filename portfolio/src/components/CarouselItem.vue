<script setup>
import { useEffectStore } from '@/shared/stores/effectStore';
import { computed } from 'vue';

const slides = computed(() => useEffectStore().$state.slides);
const currentSlide = computed(() => useEffectStore().$state.currentSlide);
console.log(slides);
</script>

<template>
    <div :class="`carousel-item ${currentSlide}`" :style="`${slides[currentSlide].background}`">
        <img :src="slides[currentSlide].picture" class="carousel-item__picture" alt="">
        <div class="carousel-item__banner">
            <div class="carousel-item__banner__description">
                <h2>{{ slides[currentSlide].title }}</h2>
                <div class="carousel-item__banner__description__techno">
                    <div v-for="techno in slides[currentSlide].techno" :key="techno.id"
                        class="carousel-item__banner__description__techno__item">
                        <img :src="techno.picture" alt="" :style="`${techno.style}`">
                    </div>
                </div>
            </div>
            <div class="carousel-item__banner__button">
                <a :href="slides[currentSlide].url">Accéder au projet</a>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.carousel-item {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 20px 20px 0;
    border-radius: 20px;

    &__picture {
        width: 85%;
        display: flex;
        margin: auto;
    }

    &__banner {
        position: absolute;
        height: 20%;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background: var(--background--secondary);

        &__description {
            color: #fff;
            padding: 0 20px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: space-evenly;

            h2 {
                font-weight: 600;
                font-size: 18px;
            }

            &__techno {
                display: flex;
                flex-direction: row;
                align-items: center;

                &__item {
                    width: 30px;

                    img {
                        height: 30px;
                        background-size: cover;
                        filter: invert(100%) sepia(1%) saturate(6446%) hue-rotate(180deg) brightness(92%) contrast(104%);
                    }
                }
            }
        }

        &__button {
            display: flex;
            justify-content: center;
            align-items: center;
            color: #fff;
            text-align: center;
            margin: 20px;

            a {
                opacity: 0.8;
                background: var(--primary);
                color: #fff;
                border: none;
                border-radius: 5px;
                padding: 10px 20px;
                text-decoration: none;
                cursor: pointer;

                &:hover {
                    opacity: 1;
                    transition: opacity 0.3s ease-in-out;
                }
            }
        }
    }
}
</style>