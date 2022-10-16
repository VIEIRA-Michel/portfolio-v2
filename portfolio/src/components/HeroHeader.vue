<script setup>
import redis from '@/assets/redis.svg';
import mongodb from '@/assets/mongodb.svg';
</script>

<template>
    <section id="top">
        <div class="top__infos">
            <img :src=mongodb alt="">
        </div>
        <div class="top__technologies">
            <div class="top__technologies__column">
                <div class="top__technologies__column__item">
                    <fa icon="fa-brands fa-vuejs" />
                </div>
                <div class="top__technologies__column__item">
                    <fa icon="fa-brands fa-react" />
                </div>
                <div class="top__technologies__column__item">
                    <fa icon="fa-brands fa-square-js" />
                </div>
            </div>
            <div class="top__technologies__column">
                <div class="top__technologies__column__item">
                    <fa icon="fa-brands fa-node-js" />
                </div>
                <div class="top__technologies__column__item">
                    <fa icon="fa-brands fa-html5" />
                </div>
                <div class="top__technologies__column__item">
                    <fa icon="fa-brands fa-css3-alt" />
                </div>
            </div>
            <div class="top__technologies__column">
                <div class="top__technologies__column__item"></div>
                <div class="top__technologies__column__item"></div>
                <div class="top__technologies__column__item"></div>
            </div>
            <div class="top__technologies__column">
                <div class="top__technologies__column__item"></div>
                <div class="top__technologies__column__item"></div>
                <div class="top__technologies__column__item"></div>
            </div>
        </div>
        <div class="top__scrolldown"></div>
    </section>
</template>