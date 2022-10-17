import { defineStore } from 'pinia';


export const useEffectStore = defineStore({
    id: "effectStore",
    state: () => ({
        arr: ['Front-End', 'Back-End', 'Full-Stack'],
        wordToDisplay: [],

    }),
    getters: {

    },
    actions: {
        changeWordToDisplay() {
            useEffectStore().$patch((state) => {
                let a = state.arr.shift();
                console.log(a);
                state.wordToDisplay.push(a);
                state.arr.push(a);
                setTimeout(() => {
                    console.log(a);
                    state.wordToDisplay.splice(0, 1);
                }, 2000)
            })
        },
    }
});