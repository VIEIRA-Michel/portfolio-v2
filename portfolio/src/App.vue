<script setup>
import Header from '@/components/Header.vue';
import HeroHeader from '@/components/HeroHeader.vue';
</script>

<template>
  <Header />
  <HeroHeader />

</template>

<style>
body {
  max-width: 1200px;
  background-color: var(--background--primary);
  margin: auto !important;
  padding: 10px 20px !important;
}
</style>