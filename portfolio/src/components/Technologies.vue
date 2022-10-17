<script setup>
import css from '@/assets/icons/icon-css.svg';
import html from '@/assets/icons/icon-html.svg';
import js from '@/assets/icons/icon-javascript.svg';
import mongo from '@/assets/icons/icon-mongodb.svg';
import mysql from '@/assets/icons/icon-mysql.svg';
import node from '@/assets/icons/icon-node.svg';
import react from '@/assets/icons/icon-react.svg';
import redis from '@/assets/icons/icon-redis.svg';
import sass from '@/assets/icons/icon-sass.svg';
import soket from '@/assets/icons/icon-socketio.svg';
import vue from '@/assets/icons/icon-vuejs.svg';


const column1 = [], column2 = [], column3 = [], column4 = [];
column1.push(html, css, sass);
column2.push(js, react, vue);
column3.push(node, mongo, mysql)
column4.push(redis, soket);

</script>

<template>
    <div class="technologies__list">
        <div class="technologies__list__column column-1">
            <div v-for="icon in column1" :key="icon" class="technologies__list__column__item">
                <img :src="icon" alt="">
            </div>
        </div>
        <div class="technologies__list__column column-2">
            <div v-for="icon in column2" :key="icon" class="technologies__list__column__item">
                <img :src="icon" alt="">
            </div>
        </div>
        <div class="technologies__list__column column-3">
            <div v-for="icon in column3" :key="icon" class="technologies__list__column__item">
                <img :src="icon" alt="">
            </div>
        </div>
        <div class="technologies__list__column column-4">
            <div v-for="icon in column4" :key="icon" class="technologies__list__column__item">
                <img :src="icon" alt="">
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.technologies__list {
    display: flex;
    flex-direction: row;
    width: 100%;


    &__column {
        margin-right: 25px;

        @for $i from 1 through 4 {
            $iteration-amount: 600ms * $i;

            &.column-#{$i} {
                -webkit-animation: card-bounce 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) infinite alternate;
                animation: card-bounce 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) infinite alternate;
                animation-delay: $iteration-amount;
            }
        }

        &.column-1,
        &.column-2,
        &.column-3,
        &.column-4 {
            display: flex;
            flex-direction: column;
        }

        &.column-1 {
            margin-top: 20px;
        }

        &.column-2 {
            margin-bottom: 20px;
        }

        &.column-3 {
            margin-top: 20px;
        }

        &.column-4 {
            justify-content: center;
            margin-right: 0;
        }

        &__item {
            display: flex;
            overflow: hidden;
            padding: 10px;
            width: 50px;
            color: var(--primary);
            background-color: var(--background--secondary);
            margin: 15px 0;
            border-radius: 5px;

            img {
                height: 50px;
                background-size: cover;
                filter: invert(100%) sepia(1%) saturate(6446%) hue-rotate(180deg) brightness(92%) contrast(104%);
            }
        }
    }
}
</style>