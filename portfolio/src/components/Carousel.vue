<script setup>
import CarouselItem from '@/components/CarouselItem.vue';
import { computed, onMounted } from 'vue';
import { useEffectStore } from '@/shared/stores/effectStore';

const slides = computed(() => useEffectStore().$state.slides);
const currentSlide = computed(() => useEffectStore().$state.currentSlide);
const newCurrentSlide = computed(() => useEffectStore().$state.newCurrentSlide);


onMounted(() => useEffectStore().initSlidesChangeAuto());
</script>

<template>
    <section class="carousel" id="projects">
        <div class="projects">
            <h2>Mes projets</h2>
            <div class="slides">
                <span v-for="(slide, index) in slides" @click="useEffectStore().setCurrentSlide(index)"
                    :class="[index === currentSlide ? 'active' : '']">•</span>
            </div>
            <div class="carousel">
                <CarouselItem v-for="(slide, index) in slides" :slide="slide" :key="index" v-show="currentSlide == index" />
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
@import '@/assets/styles/keyframes.scss';

* {
    font-family: 'Poppins', sans-serif;
}

.projects {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-top: 70px;
    margin-bottom: 20px;

    .slides {
        display: flex;
        justify-content: center;

        span {
            font-size: 30px;
            margin: 0 5px;
            cursor: pointer;
            color: #717171;

            &.active {
                color: var(--primary);
            }
        }
    }

    .carousel {
        position: relative;
        width: 90%;
        overflow: hidden;
        border-radius: 20px;
        margin: auto;
        padding: 10px;
    }
}

h2 {
    font-size: 24px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 40px;
    color: var(--text-color);
    color: #ffffff !important;
    -webkit-animation: appear-the-text 0.6s cubic-bezier(0.550, 0.085, 0.680, 0.530) 0.6s both;
    animation: appear-the-text 0.6s cubic-bezier(0.550, 0.085, 0.680, 0.530) 0.6s both;

    span {
        color: var(--primary);
        margin-right: 5px;
    }
}
</style>