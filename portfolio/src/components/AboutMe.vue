<script setup>
import picture from '@/assets/images/mv.jpg';

</script>

<template>
    <section class="about" id="about">
        <h2>À propos de moi</h2>
        <div class="about__container">
            <div class="about__container__avatar">
                <img :src="picture" alt="Photo de Michel Vieira">
            </div>
            <div class="about__container__details">
                <div class="about__container__details__paragraph">
                    <p>
                        Fasciné par l'univers du web je décide en 2022 de me lancer dans une formation de Développeur
                        web chez OpenClassrooms pour tenter d'en faire mon métier.
                    </p>
                    <p>
                        Cette formation m'a permis de me surpasser, ce fut une expérience enrichissante et j'en suis
                        ressortie avec une grande soif de nouvelles connaissances.
                    </p>
                    <p>
                        Désireux d'en apprendre toujours plus je poursuis actuellement mon apprentissage sur une
                        plateforme de cours en ligne du nom de Dyma me permettant ainsi de continuer ma montée en
                        compétence et d'apprendre d'autres langages et frameworks.
                    </p>
                    <p>
                        Le code est devenu pour moi bien plus que ce qu'il était à la base, il est à présent un moyen de
                        m'exprimer et d'insuffler la vie à mes idées.
                    </p>
                </div>
            </div>
        </div>
    </section>

</template>

<style scoped lang="scss">
* {
    font-family: 'Poppins', sans-serif;
}

.about {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 500px) {
        height: initial;
    }

    h2 {
        font-size: 24px;
        font-weight: 600;
        margin-bottom: 20px;
        text-align: center;
        color: var(--text-color);
        -webkit-animation: appear-the-text 0.6s cubic-bezier(0.550, 0.085, 0.680, 0.530) 0.3s both;
        animation: appear-the-text 0.6s cubic-bezier(0.550, 0.085, 0.680, 0.530) 0.3s both;

        span {
            color: var(--primary);
            margin-right: 5px;
        }
    }

    &__container {
        display: flex;
        flex-direction: column;
        position: relative;
        align-items: center;
        -webkit-animation: appear-the-description 0.6s cubic-bezier(0.550, 0.085, 0.680, 0.530) 0.6s both;
        animation: appear-the-description 0.6s cubic-bezier(0.550, 0.085, 0.680, 0.530) 0.6s both;

        &__details {
            background-color: var(--background--secondary);
            width: 90%;
            padding: 10px;
            display: flex;
            justify-content: center;
            flex-direction: column;
            margin: auto;
            border-radius: 15px;
            color: var(--text-color);
            z-index: 0;

            &__paragraph {
                font-size: 16px;
                font-weight: 400;

                p {
                    text-align: left;
                    margin-top: 20px;
                    line-height: normal;

                    span {
                        color: var(--primary);
                        font-weight: 500;
                    }
                }
            }

            &__button {
                margin-top: 20px;
                display: flex;
                justify-content: center;
                font-style: oblique;

                button {
                    color: var(--primary);
                    background: transparent;
                    border: none;
                    border-bottom: 1px solid var(--primary);
                    cursor: pointer;
                }
            }
        }

        &__avatar {
            z-index: 1;
            position: relative;
            top: 30px;

            img {
                width: 100px;
                height: 100x;
                object-fit: cover;
                border-radius: 50%;
            }
        }
    }

}
</style>