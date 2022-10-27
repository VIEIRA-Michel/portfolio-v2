<script setup>

const props = defineProps({
    slide: {
        type: Object,
        required: true,
    },
});
</script>

<template>
    <div :class="`carousel-item ${props.slide.id}`" :style="`${props.slide.background}`">
        <img :src="props.slide.picture" class="carousel-item__picture" alt="">
        <div class="carousel-item__banner">
            <div class="carousel-item__banner__description">
                <h2>{{ props.slide.title }}</h2>
                <div class="carousel-item__banner__description__techno">
                    <div v-for="techno in props.slide.techno" :key="techno.id"
                        class="carousel-item__banner__description__techno__item">
                        <img :src="techno.picture" alt="" :style="`${techno.style}`">
                    </div>
                </div>
            </div>
            <div class="carousel-item__banner__button">
                <a :href="props.slide.url">Accéder au projet</a>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.carousel-item {
    border-radius: 20px;

    &__picture {
        width: 90%;
        display: flex;
        margin: auto;
        padding-top: 20px;
    }

    &__banner {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background: var(--background--secondary);
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px;

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
                background: var(--primary-light);
                color: #fff;
                border: none;
                border-radius: 5px;
                padding: 10px 20px;
                text-decoration: none;
                cursor: pointer;

                &:hover {
                    background: var(--primary);
                    transition: 0.3s ease-in-out;
                }
            }
        }
    }
}
</style>