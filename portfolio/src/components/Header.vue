<script setup>
import { ref } from 'vue';
import mv from '../assets/icons/mv-final.svg';
const displayMenu = ref(null);

const emit = defineEmits(['active-menu'])

function unrollMenu() {
    if (displayMenu.value == null) {
        displayMenu.value = true;
        emit('active-menu', displayMenu.value);
    } else {
        displayMenu.value = !displayMenu.value;
        emit('active-menu', displayMenu.value);
    }
}

</script>

<template>
    <header class="header">
        <div
            :class="[displayMenu ? 'header__container active' : displayMenu == false ? 'header__container hidden' : 'header__container']">
            <div class="header__container__top">
                <a href=""><img :src="mv" alt=""></a>
                <nav
                    :class="[displayMenu ? 'header__container__top__navbar active' : displayMenu == false ? 'header__container__top__navbar hidden' : 'header__container__top__navbar']">
                    <ul class="header__container__top__navbar__list">
                        <li class="header__container__top__navbar__list__item item-1">
                            <a @click="displayMenu = false" href="#about">À propos</a>
                        </li>
                        <li class="header__container__top__navbar__list__item item-2">
                            <a @click="displayMenu = false" href="#projects">
                                Projets
                            </a>
                        </li>
                        <li class="header__container__top__navbar__list__item item-3">
                            <a @click="displayMenu = false" href="#contact">
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
                <div class="header__container__top__menu" @click="unrollMenu">
                    <fa v-if="displayMenu" icon="fa-solid fa-xmark" id="active" />
                    <fa v-else icon="fa-solid fa-bars" id="inactive" />
                </div>
            </div>
        </div>
    </header>
</template>

<style scoped lang="scss">
@import '@/assets/styles/keyframes.scss';

* {
    font-family: 'Poppins', sans-serif;
}

.header {
    display: flex;
    width: 100%;
    position: fixed;
    top: 0;
    justify-content: space-between;
    z-index: 1;
    backdrop-filter: blur(12px);
    background: rgba(22, 23, 29, .85);
    align-items: center;
    padding: 10px 0px;
    color: var(--text-color);
    -webkit-animation: appear 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) 0.9s both;
    animation: appear 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) 0.9s both;

    &__container {
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 70px;
        width: 100%;
        justify-content: space-between;

        &.active {
            padding-top: 8px;
            height: 100vh;
            align-items: flex-start;
            transition: height .3s ease-in-out;
            z-index: 99;
        }

        &.hidden {
            height: 70px;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            padding-top: 8px;
            // height: 70px;
            width: 100%;
            justify-content: space-between;
            transition: height .3s ease-in-out;

        }

        a {
            margin-left: 15px;
            font-size: 32px;
            font-weight: 600;
            color: #fff;
            text-decoration: none;

            img {
                -webkit-animation: flicker-in-1 3s linear 1s both;
                animation: flicker-in-1 3s linear 1s both;
                width: 50px;
            }
        }

        &__top {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;

            &__navbar {
                margin-right: 15px;

                &__list {
                    display: flex;
                    list-style: none;

                    &__item {
                        @media (max-width: 991px) {
                            @for $i from 1 through 4 {
                                $iteration-amount: 300ms * $i;

                                &.item-#{$i} {
                                    -webkit-animation: slide-in-blurred-right 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) both;
                                    animation: slide-in-blurred-right 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) both;
                                    animation-delay: $iteration-amount;
                                }
                            }
                        }

                        @media (min-width: 992px) {
                            @for $i from 1 through 4 {
                                $iteration-amount: 500ms * $i;

                                &.item-#{$i} {
                                    -webkit-animation: slide-in-blurred-right 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) both;
                                    animation: slide-in-blurred-right 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) both;
                                    animation-delay: $iteration-amount;
                                }
                            }
                        }

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
                            }
                        }
                    }
                }

                @media (max-width: 991px) {
                    display: none;

                    &.active {
                        display: flex;
                        position: absolute;
                        top: 30%;
                        height: 40%;

                        ul {
                            height: 100%;
                            justify-content: space-between;
                            display: flex;
                            flex-direction: column;
                            transition: all .3s ease-in-out;
                        }

                    }

                    &.hidden {
                        display: none;
                    }
                }
            }

            &__menu {
                display: none;

                @media (max-width: 991px) {
                    display: block;
                    margin-right: 15px;
                    font-size: 24px;
                    cursor: pointer;

                    #active {
                        color: #fff;
                        font-size: 30px;

                        &:hover {
                            color: #ff5a5f;
                            transition: .3s all ease-in-out;
                        }
                    }

                    #inactive {
                        color: #fff;

                        &:hover {
                            color: #ff5a5f;
                            transition: .3s all ease-in-out;
                        }
                    }

                    svg {
                        -webkit-animation: slide-in-blurred-right 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) both;
                        animation: slide-in-blurred-right 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) both;
                        transition: .3s all ease-in-out;

                    }

                }
            }
        }
    }

}
</style>