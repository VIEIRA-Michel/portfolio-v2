import { defineStore } from 'pinia';
import { data } from '@/data/data.js';

export const useEffectStore = defineStore({
    id: "effectStore",
    state: () => ({
        arr: ['Front-End', 'Back-End', 'Full-Stack'],
        wordToDisplay: [],
        slides: data,
        currentSlide: 0,
        newCurrentSlide: 0,
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
    }
});