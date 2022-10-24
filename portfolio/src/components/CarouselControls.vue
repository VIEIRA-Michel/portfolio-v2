<script setup>
import { useEffectStore } from '@/shared/stores/effectStore';

</script>

<template>
    <button class="carousel-control left" @click="useEffectStore().previousSlide">
        <fa icon="fa-solid fa-arrow-left-long" />
    </button>
    <button class="carousel-control right" @click="useEffectStore().nextSlide">
        <fa icon="fa-solid fa-arrow-right-long" />
    </button>
</template>

<style scoped lang="scss">
.carousel-control {
    background-color: rgba(0, 0, 0, 0.5);
    border: none;
    display: inline-block;
    position: absolute;
    height: 50px;
    width: 50px;
    top: calc(50% - 25px);
    color: #f3f3f3;
    cursor: pointer;
    padding: 10px;

    svg {
        font-size: 24px;
    }

    &:hover {
        background-color: rgba(0, 0, 0, 0.8);
        transition: 0.3s all;
    }
}

.left {
    left: 0;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
}

.right {
    right: 0;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
}
</style>