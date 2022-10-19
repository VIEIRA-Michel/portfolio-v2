<script setup>
import Header from '@/components/Header.vue';
import HeroHeader from '@/components/HeroHeader.vue';
import AboutMe from '@/components/AboutMe.vue';
import Carousel from '@/components/Carousel.vue';
import { useEffectStore } from '@/shared/stores/effectStore';
import { watch, ref, onMounted } from 'vue';

onMounted(() => {
  window.addEventListener('scroll', (e) => {
    useEffectStore().setScrollY(window.scrollY);
  });
});
</script>

<template>
  <Header />
  <main @scroll="getScroll($event)">
    <HeroHeader />
    <Carousel />
  </main>
</template>
<style>
body {
  max-width: 1200px;
  background-color: var(--background--primary);
  margin: auto !important;
  padding: 10px 20px !important;
}

main {
  display: flex;
  flex-direction: column;
}
</style>