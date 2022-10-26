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
    background-color: rgba(0, 0, 0, 0.2);
    border: none;
    display: inline-block;
    position: absolute;
    bottom: 50%;
    color: #f3f3f3;
    cursor: pointer;
    display: flex;
    justify-content: center;
    padding: 15px;

    svg {
        font-size: 18px;
    }

    &:hover {
        background-color: rgba(0, 0, 0, 0.5);
        transition: 0.3s all;
    }
}

.left {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    left: 0;
}

.right {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    right: 0;
}
</style>