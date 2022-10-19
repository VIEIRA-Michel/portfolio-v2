<script setup>
import { useEffectStore } from '@/shared/stores/effectStore';
import { computed } from 'vue';

const slides = computed(() => useEffectStore().$state.slides);
const currentSlide = computed(() => useEffectStore().$state.currentSlide);

</script>

<template>
    <div class="carousel-item">
        <img :src="slides[currentSlide]" alt="">
    </div>
</template>

<style scoped lang="scss">
.carousel-item {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    img {
        border-radius: 15px;
    }
}
</style>