<script setup>
</script>

<template>
    <button class="carousel-control left" @click="$emit('previous')">
        <fa icon="fa-solid fa-arrow-left-long" />
    </button>
    <button class="carousel-control right" @click="$emit('next')">
        <fa icon="fa-solid fa-arrow-right-long" />
    </button>
</template>

<style scoped lang="scss">
.carousel-control {
    background-color: rgba(255, 90, 95, 0.8);
    border: none;
    display: inline-block;
    position: absolute;
    height: 50px;
    width: 50px;
    top: 50%;
    color: #f3f3f3;
    cursor: pointer;
    padding: 20px;
    border-radius: 20px;

    svg {
        font-size: 12px;
    }

    &:hover {
        background-color: rgba(255, 90, 95, 1);
        transition: 0.3s all;
    }
}

.left {
    left: -15px;
}

.right {
    right: -15px;
}
</style>