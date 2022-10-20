<script setup>
import { useEffectStore } from '@/shared/stores/effectStore';
import { computed } from 'vue';

const slides = computed(() => useEffectStore().$state.slides);
const currentSlide = computed(() => useEffectStore().$state.currentSlide);

</script>

<template>
    <div class="carousel-item">
        <img :src="slides[currentSlide]" alt="">
        <div class="carousel-item__banner">
            <div class="carousel-item__banner__description">
                <h2>Slide {{ currentSlide + 1 }}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>
            </div>
            <div class="carousel-item__banner__button">
                <button>Accéder au projet</button>
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

    &__banner {
        position: absolute;
        height: 20%;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background: rgba(0, 0, 0, 0.5);

        &__description {
            color: #fff;
            padding: 0 20px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: space-evenly;
        }

        &__button {
            display: flex;
            justify-content: center;
            align-items: center;
            color: #fff;
            text-align: center;
            margin: 20px;

            button {
                opacity: 0.8;
                background: var(--primary);
                color: #fff;
                border: none;
                border-radius: 5px;
                padding: 10px 20px;
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