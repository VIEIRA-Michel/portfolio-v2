import { defineStore } from 'pinia';
import { data } from '@/data/data.js';

export const useEffectStore = defineStore({
    id: "effectStore",
    state: () => ({
        arr: ['Front-End', 'Back-End', 'Full-Stack'],
        wordToDisplay: [],
        slides: data,
        currentSlide: 0,
        scrollY: 0,
        newCurrentSlide: 0,
        mousePosition: 0,
        headerY: 0,
        heroHeaderY: 0,
        aboutY: 0,
        projectsY: 0,
        footerY: 0,
    }),
    getters: {

    },
    actions: {
        changeWordToDisplay() {
            useEffectStore().$patch((state) => {
                let a = state.arr.shift();
                state.wordToDisplay.push(a);
                state.arr.push(a);
                setTimeout(() => {
                    state.wordToDisplay.splice(0, 1);
                }, 2000)
            })
        },
        setCurrentSlide(index) {
            useEffectStore().$patch((state) => {
                state.currentSlide = index;
                setTimeout(() => {
                    state.newCurrentSlide = index;
                }, 100)
            })
        },
        initSlideInterval() {
            useEffectStore().$patch((state) => {
                state.slideInterval = setInterval(() => {
                    const index = state.currentSlide < state.slides.length - 1 ? state.currentSlide + 1 : 0;
                    useEffectStore().setCurrentSlide(index);
                }, 3000);
            })
        },
        previousSlide() {
            useEffectStore().$patch((state) => {
                const index = state.currentSlide > 0 ? state.currentSlide - 1 : state.slides.length - 1;
                useEffectStore().setCurrentSlide(index);
            })
        },
        nextSlide() {
            useEffectStore().$patch((state) => {
                const index = state.currentSlide < state.slides.length - 1 ? state.currentSlide + 1 : 0;
                useEffectStore().setCurrentSlide(index);
            })
        },
        clearInterval() {
            useEffectStore().$patch((state) => {
                clearInterval(state.slideInterval);
            })
        },
        setScrollY(scroll) {
            useEffectStore().$patch((state) => {
                state.scrollY = scroll;
            })
        },
        setPositionY(headerY, heroHeaderY, aboutY, projectsY, footerY) {
            useEffectStore().$patch((state) => {
                state.headerY = headerY;
                state.heroHeaderY = heroHeaderY;
                state.aboutY = aboutY;
                state.projectsY = projectsY;
                state.footerY = footerY;
            })
        },
    }
});