<script setup>
import { computed } from 'vue';
import { useEffectStore } from '@/shared/stores/effectStore';
import Technologies from '@/components/Technologies.vue';


const wordToDisplay = computed(() => useEffectStore().$state.wordToDisplay);

window.setInterval(function () {
    useEffectStore().changeWordToDisplay();
}, 1500)

</script>

<template>
    <section class="home">
        <div class="home__container">
            <div class="home__container__infos">
                <h1 class="home__container__infos__presentation">
                    Salut, moi c'est Michel 👋
                </h1>
                <div class="home__container__infos__description">
                    <p>Développeur</p>
                    <p :class="[wordToDisplay.length > 1 ? 'animation-exit' : 'animation-entrance']">
                        {{ wordToDisplay[0] }}
                    </p>
                </div>
                <div class="home__container__infos__buttons">
                    <a href="mailto:michelvieira.pro@gmail.com" class="btn btn-primary">
                        Me contacter
                    </a>
                    <a href="#projects" class="btn btn-secondary">
                        Voir mes projets
                    </a>
                </div>

            </div>
            <div class="home__container__technologies">
                <Technologies />
            </div>
            <div class="home__container__scrolldown">
                <div class="home__container__scrolldown__mouse">
                    <div class="home__container__scrolldown__mouse__wheel">

                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
@import '@/assets/styles/keyframes.scss';

* {
    font-family: 'Poppins', sans-serif;
}



.home {
    display: flex;
    justify-content: center;
    color: #fff;
    position: relative;
    top: 70px;
    overflow-x: hidden;
    overflow-y: hidden;
    height: 100vh;

    &__container {
        width: 91.7%;
        display: flex;
        flex-wrap: wrap;
        // height: inherit;
        flex-direction: row;
        justify-content: space-between;
        // margin: auto;
        position: relative;

        &__infos {
            display: flex;
            justify-content: space-evenly;
            flex-direction: column;

            @media (min-width: 992px) {
                display: flex;
                text-align: left;
                width: 50%;
            }

            @media (max-width: 991px) {
                text-align: center;
                width: 100%;
            }

            &__presentation {
                font-size: 32px;
                line-height: 60px;
                font-weight: 300;
                -webkit-animation: appear-the-text 0.6s cubic-bezier(0.550, 0.085, 0.680, 0.530) 1.1s both;
                animation: appear-the-text 0.6s cubic-bezier(0.550, 0.085, 0.680, 0.530) 1.1s both;

                @media (max-width: 991px) {
                    font-size: 28px;
                }
            }

            &__description {
                -webkit-animation: appear-the-text 0.6s cubic-bezier(0.550, 0.085, 0.680, 0.530) 1.4s both;
                animation: appear-the-text 0.6s cubic-bezier(0.550, 0.085, 0.680, 0.530) 1.4s both;


                p {
                    margin-top: 10px;
                    font-size: 48px;
                    font-weight: 600;

                    @media (max-width: 991px) {
                        font-size: 34px;
                    }
                }

                .animation-entrance {
                    color: var(--primary);
                    -webkit-animation: entrance 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
                    animation: entrance 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
                }

                .animation-exit {
                    color: var(--primary);
                    -webkit-animation: exit 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) reverse both;
                    animation: exit 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) reverse both;
                }
            }

            &__buttons {
                display: flex;
                justify-content: center;

                @media (min-width: 992px) {
                    justify-content: flex-start;
                }

                a {
                    transition: 0.3s all ease-in-out;

                    &:first-child {
                        -webkit-animation: appear-the-button 0.6s cubic-bezier(0.550, 0.085, 0.680, 0.530) 1.7s both;
                        animation: appear-the-button 0.6s cubic-bezier(0.550, 0.085, 0.680, 0.530) 1.7s both;
                        background: var(--primary-light);

                        &:hover {
                            background: var(--primary);
                        }
                    }

                    &:nth-child(2) {
                        -webkit-animation: appear-the-button 0.6s cubic-bezier(0.550, 0.085, 0.680, 0.530) 2s both;
                        animation: appear-the-button 0.6s cubic-bezier(0.550, 0.085, 0.680, 0.530) 2s both;

                        &:hover {
                            background: rgba(255, 255, 255, 0.2);
                        }
                    }


                }

            }


        }

        &__technologies {
            display: none;

            @media (min-width: 992px) {
                display: flex;
                align-items: center;
                width: 50%;
                -webkit-animation: appear-technologies 0.6s cubic-bezier(0.550, 0.085, 0.680, 0.530) 2s both;
                animation: appear-technologies 0.6s cubic-bezier(0.550, 0.085, 0.680, 0.530) 2s both;

                .technologies__list {
                    justify-content: flex-end;
                }
            }


        }

        &__scrolldown {
            display: flex;
            justify-content: center;
            width: 100%;
            // align-items: center;
            -webkit-animation: appear-mouse 0.6s cubic-bezier(0.550, 0.085, 0.680, 0.530) 2.3s both;
            animation: appear-mouse 0.6s cubic-bezier(0.550, 0.085, 0.680, 0.530) 2.3s both;


            &__mouse {
                width: 20px;
                height: 34px;
                position: relative;
                border: 2px solid var(--text-color);
                border-radius: 15px;
                display: flex;
                justify-content: center;

                &__wheel {
                    height: 4px;
                    border-radius: 50px;
                    position: absolute;
                    top: 8px;
                    width: 4px;
                    background-color: var(--text-color);
                    -webkit-animation: scroll-down 1s ease-in-out infinite alternate both;
                    animation: scroll-down 1s ease-in-out infinite alternate both;
                }
            }
        }
    }
}
</style>