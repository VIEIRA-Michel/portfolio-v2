<script setup>
import CarouselItem from '@/components/CarouselItem.vue';
import CarouselControls from '@/components/CarouselControls.vue';
import { computed } from 'vue';
import { useEffectStore } from '@/shared/stores/effectStore';

const slides = computed(() => useEffectStore().$state.slides);
const currentSlide = computed(() => useEffectStore().$state.currentSlide);
const newCurrentSlide = computed(() => useEffectStore().$state.newCurrentSlide);

</script>

<template>
    <section class="projects" id="projects">
        <h2><span>•</span>Mes projets</h2>
        <!-- <div class="carousel-container"> -->
        <div class="carousel">
            <Transition name="fadeRight" mode="out-in">
                <template v-if="currentSlide === newCurrentSlide">
                    <CarouselItem :slide="slides[currentSlide]" />
                </template>
            </Transition>
            <CarouselControls @previous="useEffectStore().previousSlide" @next="useEffectStore().nextSlide" />
        </div>
        <!-- </div> -->
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

    .carousel {
        position: relative;
        width: 90%;
        // overflow: hidden;
        border-radius: 20px;
        margin: auto;
        padding: 10px;
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
}

.fadeRight-leave-to {
    opacity: 0;
}

.fadeRight-enter-active,
.fadeRight-leave-active {
    transition: all 0.4s;
}

.fadeRight-enter-from {
    opacity: 0;
}
</style>