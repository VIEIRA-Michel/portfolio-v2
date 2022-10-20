import { defineStore } from 'pinia';


export const useEffectStore = defineStore({
    id: "effectStore",
    state: () => ({
        arr: ['Front-End', 'Back-End', 'Full-Stack'],
        wordToDisplay: [],
        slides: [
            'https://picsum.photos/id/1022/1200/400',
            'https://picsum.photos/id/1023/1200/400',
            'https://picsum.photos/id/1024/1200/400',
            'https://picsum.photos/id/1025/1200/400',
            'https://picsum.photos/id/1026/1200/400',
            'https://picsum.photos/id/1027/1200/400',
            'https://picsum.photos/id/1028/1200/400',
        ],
        projects: [],
        currentSlide: 0,
        slideInterval: null,
        scrollY: 0,

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
                state.scrollY = scroll * 1.67;
            })
        }
    }
});