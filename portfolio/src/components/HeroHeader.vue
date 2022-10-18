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
    <main>
        <section class="home">
            <div class="home__container">
                <div class="home__container__infos">
                    <h1 class="home__container__infos__presentation">
                        Salut, moi c'est Michel 👋
                    </h1>
                    <div class="home__container__infos__description">
                        <p>Développeur</p>
                        <p :class="[wordToDisplay.length > 1 ? 'animation-exit' : 'animation-entrance']">
                            {{ wordToDisplay[0]}}
                        </p>
                    </div>
                    <div class="home__container__infos__buttons">
                        <a class="btn btn-primary">
                            Me contacter
                        </a>
                        <a class="btn btn-secondary">
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
    </main>
</template>

<style scoped lang="scss">
@import '@/assets/styles/keyframes.scss';

* {
    font-family: 'Poppins', sans-serif;
}

main {
    display: flex;
    flex-direction: column;

    .home {
        display: flex;
        justify-content: center;
        color: #fff;
        margin-top: 50px;

        &__container {
            width: 100%;
            ;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            margin: auto;
            position: relative;

            &__infos {
                display: flex;
                justify-content: space-between;
                flex-direction: column;

                &__presentation {
                    font-size: 32px;
                    line-height: 60px;
                    font-weight: 300;
                    -webkit-animation: appear-the-text 0.6s cubic-bezier(0.550, 0.085, 0.680, 0.530) 1.1s both;
                    animation: appear-the-text 0.6s cubic-bezier(0.550, 0.085, 0.680, 0.530) 1.1s both;
                }

                &__description {
                    font-size: 48px;
                    -webkit-animation: appear-the-text 0.6s cubic-bezier(0.550, 0.085, 0.680, 0.530) 1.4s both;
                    animation: appear-the-text 0.6s cubic-bezier(0.550, 0.085, 0.680, 0.530) 1.4s both;

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
                    a {
                        &:first-child {
                            -webkit-animation: appear-the-button 0.6s cubic-bezier(0.550, 0.085, 0.680, 0.530) 1.7s both;
                            animation: appear-the-button 0.6s cubic-bezier(0.550, 0.085, 0.680, 0.530) 1.7s both;
                        }

                        &:nth-child(2) {
                            // appear-the-button
                            -webkit-animation: appear-the-button 0.6s cubic-bezier(0.550, 0.085, 0.680, 0.530) 2s both;
                            animation: appear-the-button 0.6s cubic-bezier(0.550, 0.085, 0.680, 0.530) 2s both;
                        }
                    }

                }
            }

            &__technologies {
                -webkit-animation: appear-technologies 0.6s cubic-bezier(0.550, 0.085, 0.680, 0.530) 2s both;
                animation: appear-technologies 0.6s cubic-bezier(0.550, 0.085, 0.680, 0.530) 2s both;
            }

            &__scrolldown {
                position: absolute;
                left: 50%;
                bottom: -100px;
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
}
</style>