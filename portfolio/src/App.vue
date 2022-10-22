<script setup>
import Header from '@/components/Header.vue';
import HeroHeader from '@/components/HeroHeader.vue';
import Carousel from '@/components/Carousel.vue';
import AboutMe from '@/components/AboutMe.vue';
import Footer from '@/components/Footer.vue';
import { useEffectStore } from '@/shared/stores/effectStore';
import { watch, ref, onMounted, computed } from 'vue';

onMounted(() => {
  window.addEventListener('scroll', (e) => {
    useEffectStore().setScrollY(window.scrollY);
  });
  // const mouse = window.scrollY + document.querySelector('.home__container__scrolldown__mouse').getBoundingClientRect().top;
});

function scrollToTop(e) {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}
</script>

<template>
  <Header />
  <div @click="scrollToTop" class="backtotop">
    <fa icon="fa-solid fa-arrow-up" />
  </div>
  <main>
    <HeroHeader />
    <AboutMe />
    <Carousel />
  </main>
  <Footer />
</template>
<style lang="scss">
* {
  scroll-behavior: smooth;
}

.backtotop {
  height: 50px;
  width: 50px;
  border-radius: 100%;
  cursor: pointer;
  position: fixed;
  right: 25px;
  bottom: 25px;
  background-color: var(--primary);
  color: var(--text-color);
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: 18px;
    width: 18px;
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
</style>