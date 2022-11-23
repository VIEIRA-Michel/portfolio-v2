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
                        En 2020, suite à la pandémie je prends conscience de la réalité, il était temps pour moi d'agir
                        et de me former à un métier qui correspondrait à mes attentes.
                        Je décide donc de quitter mon emploi et de me tourner vers une formation de développeur web
                        proposé par O'clock en auto-financement.
                    </p>
                    <p>
                        Ma première formation ne m'a pas apporté entière satisfaction, car le format des cours rendait
                        difficile le fait de tout mémoriser.

                        J'en suis ressorti avec beaucoup de lacunes et un syndrome de l'imposteur en prime mais j'ai
                        décidé que je ne baisserais pas les bras pour autant.

                        Ayant le désir d'en apprendre d'avantage et de consolider les quelques connaissances que
                        j'avais acquises j'ai cherché par la suite à me former de manière autonome.
                    </p>
                    <p>
                        J'ai donc commencé à suivre les cours d'Openclassrooms et j'ai par la suite entamer les
                        démarches pour intégrer leur parcours de développeur web et cette fois-ci tenté d'obtenir un
                        titre professionnel à la fin.

                        O'clock m'a permis d'apprendre ce qu'était le code, mais Openclassrooms m'a permis d'apprendre
                        qui j'étais et de me montrer que tout ce qui me paraissait impossible, en réalité ne l'était
                        pas.

                        Grâce à leur méthodologie j'ai pris beaucoup de plaisir à apprendre et mes doutes se sont
                        dissipés.
                    </p>
                    <p>
                        Aujourd'hui je suis conscient que je ne connais pas tout, mais je sais aussi que je peux tout
                        apprendre et même si le chemin menant à la réussite est encore long, cette expérience m'aura
                        permis d'apprendre à aimer
                        autant le processus que la récompense.
                    </p>
                    <p>
                        Le code est devenu pour moi un moyen de m'exprimer et d'insuffler la vie à mes idées.
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
                border: 2px solid #f3f3f3;
            }
        }
    }

}
</style>