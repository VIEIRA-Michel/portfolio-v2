<script setup>
import picture from '@/assets/images/mv.jpg';

</script>

<template>
    <section id="about">
        <h2><span>•</span>À propos de moi</h2>
        <div class="about__container">
            <div class="about__container__avatar">
                <img :src="picture" alt="Photo de Michel Vieira">
            </div>
            <div class="about__container__details">
                <div class="about__container__details__paragraph">
                    <p>
                        Quand j'étais plus jeune tandis que tous les enfants de mon âge rêvaient d'être pompier ou
                        docteur, moi je voulais être
                        informaticien, cependant n'étant pas un élève très brillant j'ai dû me contraindre à me tourner
                        vers un autre secteur, car mes notes ne me permettait pas d'intégrer la filière informatique.
                    </p>
                    <p>
                        J'ai donc fait de la comptabilité, puis de la plomberie et pour finir de la maçonnerie, mais je
                        finissais par abandonner en cours de route, car cela ne m'intéressait pas.
                    </p>
                    <p>
                        Une fois l'âge légal pour travailler atteint je me suis orienté vers le secteur de la logistique
                        où j'ai travaillé jusqu'à 2020.
                    </p>
                    <p>
                        En 2020, suite à la pandémie je me rends compte que le temps était compté, que je devais agir
                        maintenant, que je devais faire quelque chose pour moi, pour mon avenir, qu'il était
                        inadmissible de vivre sans faire le
                        nécessaire pour réaliser ses rêves, même si ce n'est que les effleurer du bout des doigts.
                    </p>
                    <p>
                        Je décide donc de quitter mon emploi et de me tourner vers les métiers du numérique.
                    </p>
                    <p>
                        Voilà maintenant 1 ans et demie que j'ai décidé de changer de voie, j'ai intégré un bootcamp du
                        nom de O'Clock, cependant en cours de route je me rends compte que le format des cours ne me
                        convenait pas je
                        n'arrivais pas à mémoriser les notions de la veille, car tous les jours nous apprenions quelques
                        choses de nouveau, c'était
                        à la fois épuisant mentalement et soporifique, j'en suis ressorti avec énormément de lacune.
                        Reproduire une maquette en HTML et CSS était inconcevable à mes yeux, je n'étais clairement pas
                        employable, je m'étais presque convaincu que je n'étais peut-être pas fait pour le code.
                    </p>
                    <p>
                        Ayant le désir d'en apprendre d'avantages et de consolider les notions que j'avais acquises j'ai
                        recherché par la suite une formation plus complète, mais cette fois-ci j'ai décidé de changer de
                        méthodologie et
                        d'apprendre en autodidacte en allant chercher les informations directement à leurs sources.
                    </p>
                    <p>
                        Openclassrooms proposait de se former en autodidacte, d'ailleurs ce format était tout nouveau
                        pour moi. J'étais longtemps persuadé que le présentiel était la seule façon d'apprendre mais
                        j'ai
                        été agréablement surpris par la qualité des cours et le fait d'avoir différent projets à
                        réaliser m'a
                        permis de me concentrer sur le code et de ne pas me disperser sur des notions théoriques.
                    </p>
                    <p>
                        En parallèle je me servais également de Dyma pour apprendre des choses qui n'étaient pas
                        présentes dans les cours cela m'a permis d'apprendre le framework VueJS avec lequel ce portfolio
                        est apparu.
                    </p>
                    <p>
                        Grâce à ses deux plateformes j'ai pris plaisir à apprendre et mon amour pour le code est
                        revenu.
                    </p>
                    <p>
                        Aujourd'hui je sais que le chemin menant à la réussite est encore long, mais j'ai appris à aimer
                        le processus plutôt que la récompense.
                    </p>
                    <p>
                        Le code est devenu pour moi un moyen de m'exprimer, un moyen de faire parler mon art,
                        et d'insuffler la vie à mes idées.
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

#about {
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

    .about__container {
        display: flex;
        flex-direction: column;
        position: relative;
        align-items: center;
        -webkit-animation: appear-the-description 0.6s cubic-bezier(0.550, 0.085, 0.680, 0.530) 0.6s both;
        animation: appear-the-description 0.6s cubic-bezier(0.550, 0.085, 0.680, 0.530) 0.6s both;

        &__details {
            background-color: var(--background--secondary);
            border: 2px solid #f3f3f3;
            width: 70%;
            padding: 20px;
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