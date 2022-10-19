<script setup>
import CarouselItem from '@/components/CarouselItem.vue';
import CarouselControls from '@/components/CarouselControls.vue';
import { watch, ref, computed, onMounted } from 'vue';
import { useEffectStore } from '@/shared/stores/effectStore';

const carousel = ref(document.querySelector('.carousel'));
const scrollY = computed(() => useEffectStore().$state.scrollY);
const display = ref(false);

onMounted(() => {
    const carousel = ref(document.querySelector('.carousel').offsetTop);

    if (scrollY.value > carousel.value - 100) {
        display.value = true;
    }
});

watch(scrollY, (value) => {
    if (value > carousel.value - 100) {
        display.value = true;
    }
});


</script>

<template>
    <section :class="[display ? 'animation-entrance' : 'carousel']">
        <div class="carousel-inner">
            <CarouselItem />
            <CarouselControls />
        </div>
    </section>
</template>

<style scoped lang="scss">
@import '@/assets/styles/keyframes.scss';

.carousel {
    visibility: hidden;
    display: flex;
    justify-content: center;
}

.animation-entrance {
    visibility: visible;
    display: flex;
    justify-content: center;
    -webkit-animation: carousel-appear 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) 0.3s both;
    animation: carousel-appear 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) 0.3s both;
}

.carousel-inner {
    position: relative;
    width: 900px;
    height: 400px;
    overflow: hidden;
    border-radius: 5px;
    border: 2px solid #f3f3f3;
}
</style>