<script setup>
import Header from '@/components/Header.vue';
import HeroHeader from '@/components/HeroHeader.vue';
import Carousel from '@/components/Carousel.vue';
import AboutMe from '@/components/AboutMe.vue';
import Footer from '@/components/Footer.vue';
import { useEffectStore } from '@/shared/stores/effectStore';
import { ref, onMounted, computed } from 'vue';

const showButton = ref(false);
const showAbout = ref(false);
const showProjects = ref(false);
const showFooter = ref(false);

onMounted(() => {
  const scrollY = computed(() => useEffectStore().$state.scrollY);
  const headerY = computed(() => useEffectStore().$state.headerY);
  const heroHeaderY = computed(() => useEffectStore().$state.heroHeaderY);
  const aboutY = computed(() => useEffectStore().$state.aboutY);
  const projectsY = computed(() => useEffectStore().$state.projectsY);
  const footerY = computed(() => useEffectStore().$state.footerY);

  function getPosition() {
    useEffectStore().setPositionY(
      document.querySelector('header').clientHeight,
      document.querySelector('.home').clientHeight,
      document.querySelector('.about').clientHeight,
      document.querySelector('.projects').clientHeight,
      document.querySelector('footer').clientHeight
    );
  }
  getPosition();
  window.addEventListener('scroll', (e) => {
    useEffectStore().setScrollY(window.scrollY);
    scrollY.value + document.documentElement.clientHeight > headerY.value + heroHeaderY.value + aboutY.value ? showButton.value = true : showButton.value = false;
    scrollY.value + document.documentElement.clientHeight + 100 >= headerY.value + heroHeaderY.value + aboutY.value ? showAbout.value = true : showAbout.value = false;
    scrollY.value + document.documentElement.clientHeight + 100 >= headerY.value + heroHeaderY.value + aboutY.value + projectsY.value ? showProjects.value = true : showProjects.value = false;
    scrollY.value + document.documentElement.clientHeight >= headerY.value + heroHeaderY.value + aboutY.value + projectsY.value + footerY.value ? showFooter.value = true : showFooter.value = false;
  });
  window.addEventListener('resize', (e) => {
    getPosition();
  })
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

</script>

<template>
  <Header />
  <div @click="scrollToTop" :class="[showButton ? 'backtotop display__visible' : 'backtotop display__hidden']">
    <fa icon="fa-solid fa-arrow-up" />
  </div>
  <main>
    <HeroHeader />
    <AboutMe :class="[showAbout ? 'display__visible' : 'display__hidden']" />
    <Carousel :class="[showProjects ? 'display__visible' : 'display__hidden']" />
  </main>
  <Footer :class="[showFooter ? 'display__visible' : 'display__hidden']" />
</template>
<style lang="scss">
* {
  scroll-behavior: smooth;
}

.backtotop {
  height: 50px;
  width: 50px;
  border-radius: 20px;
  cursor: pointer;
  position: fixed;
  right: 25px;
  bottom: 25px;
  background-color: rgba(255, 90, 95, 0.8);
  color: var(--text-color);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;

  &:hover {
    background-color: rgba(255, 90, 95, 1);
    transition: 0.3s all;
  }

  svg {
    font-size: 24px;
  }

  &.hidden {
    display: none;
  }
}

body {
  max-width: 1200px;
  background-color: var(--background--primary);
  margin: auto !important;
  padding: 10px 20px !important;
}

main {
  display: flex;
  flex-direction: column;
  /* gap: 100px; */
}

.display {
  &__visible {
    -webkit-animation: appear 0.4s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
    animation: appear 0.4s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
  }

  &__hidden {
    -webkit-animation: disappear 0.4s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
    animation: disappear 0.4s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
  }
}
</style>