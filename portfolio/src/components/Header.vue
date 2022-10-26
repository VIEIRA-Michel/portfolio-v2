<script setup>
import { ref } from 'vue';
const displayMenu = ref(false);
</script>

<template>
    <header>
        <div class="header__logo">
            <a href="">mv<span>.</span></a>
        </div>
        <nav class="header__navbar">
            <ul class="header__navbar__list">
                <li class="header__navbar__list__item">
                    <a href="#about">À propos</a>
                </li>
                <li class="header__navbar__list__item">
                    <a href="#projects">
                        Projets
                    </a>
                </li>
                <li class="header__navbar__list__item">
                    <a href="#contact">
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
        <div class="header__menu" @click="displayMenu = !displayMenu">
            <fa icon="fa-solid fa-bars" />
        </div>
        <div :class="[displayMenu ? 'header__menu__list active' : 'header__menu__list hidden']">
            <ul>
                <li>
                    <a href="#about">À propos</a>
                </li>
                <li>
                    <a href="#projects">
                        Projets
                    </a>
                </li>
                <li>
                    <a href="#contact">
                        Contact
                    </a>
                </li>
            </ul>
        </div>
    </header>
</template>

<style scoped lang="scss">
@import '@/assets/styles/keyframes.scss';

* {
    font-family: 'Poppins', sans-serif;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0px;
    backdrop-filter: blur(12px);
    color: var(--text-color);
    -webkit-animation: appear 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) 0.9s both;
    animation: appear 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) 0.9s both;

    .header__logo {
        a {
            font-size: 32px;
            font-weight: 600;
            color: #fff;
            text-decoration: none;

            span {
                color: #ff5a5f;
                font-weight: bold;
            }
        }
    }

    .header__navbar {
        @media (max-width: 991px) {
            display: none;
        }

        .header__navbar__list {
            display: flex;
            list-style: none;

            .header__navbar__list__item {
                a {
                    font-size: 17px;
                    font-weight: 100;
                    color: #fff;
                    padding: 10px;
                    transition: all .3s ease-in-out;
                    border-radius: 5px;
                    margin-left: 15px;
                    text-decoration: none;
                    cursor: pointer;

                    &:hover {
                        color: #ff5a5f;
                        background: var(--background--secondary);
                    }
                }
            }
        }
    }

    .header__menu {
        display: none;

        @media (max-width: 991px) {
            display: block;
            cursor: pointer;
        }

        &__list {

            &.active {
                -webkit-animation: unroll-menu 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) both;
                animation: unroll-menu 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) both;
                display: block;
            }

            &.hidden {
                -webkit-animation: unroll-menu 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) reverse both;
                animation: unroll-menu 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) reverse both;
                display: none;
            }
        }
    }
}
</style>