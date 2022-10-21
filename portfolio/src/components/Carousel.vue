<script setup>
import CarouselItem from '@/components/CarouselItem.vue';
import CarouselControls from '@/components/CarouselControls.vue';
import { watch, ref, computed, onMounted } from 'vue';
import { useEffectStore } from '@/shared/stores/effectStore';

const scrollY = computed(() => useEffectStore().$state.scrollY);
const display = ref(null);

onMounted(() => {
    const carousel = document.querySelector('.carousel-container').offsetTop;
    watch(scrollY, (value) => {
        if (value > carousel - 100) {
            display.value = true;
        } else if (value < carousel / 5.4) {
            display.value = false;
        }
    });
});

</script>

<template>
    <section id="projects">
        <h2><span>•</span>Mes projets</h2>
        <div class="carousel-container">
            <div :class="[display ? 'animation-entrance' : 'carousel-inner']">
                <CarouselItem />
                <CarouselControls />
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
@import '@/assets/styles/keyframes.scss';

* {
    font-family: 'Poppins', sans-serif;
}

#projects {
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 100vh;

    .carousel-container {
        .animation-entrance {
            visibility: visible;
            position: relative;
            height: 400px;
            overflow: hidden;
            border-radius: 15px;
            -webkit-animation: carousel-appear 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) 0.3s both;
            animation: carousel-appear 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) 0.3s both;
        }

        .carousel-inner {
            visibility: hidden;
            position: relative;
            height: 400px;
            overflow: hidden;
            border-radius: 15px;
        }
    }

    h2 {
        font-size: 24px;
        font-weight: 600;
        text-align: center;
        margin-bottom: 20px;
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
</style>