<script setup>
import { ref, onMounted } from 'vue';
import Header from '@/components/Header.vue';
import HeroHeader from '@/components/HeroHeader.vue';
import AboutMe from '@/components/AboutMe.vue';
import Carousel from '@/components/Carousel.vue';
import Footer from '@/components/Footer.vue';

const showButton = ref(false);

onMounted(() => {
  const ratio = .3;
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
  }
  function handleIntersect(entries, observer) {
    entries.forEach(function (entry) {
      if (entry.intersectionRatio > ratio) {
        entry.target.classList.remove('display__hidden');
        entry.target.classList.add('display__visible');
      } else {
        entry.target.classList.remove('display__visible');
        entry.target.classList.add('display__hidden');
      }
    })
  }
  const observer = new IntersectionObserver(handleIntersect, options);
  document.querySelectorAll('section').forEach(function (r) {
    console.log(r);
    observer.observe(r);
  })
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}


window.addEventListener('scroll', () => {
  if (window.scrollY > document.querySelector('header').clientHeight + document.querySelector('.home').clientHeight) {
    console.log('visible');
    showButton.value = true;
    document.querySelector('.backtotop').classList.remove('display__hidden');
    document.querySelector('.backtotop').classList.add('display__visible');
  } else if (showButton.value == true && window.scrollY < document.querySelector('header').clientHeight + document.querySelector('.home').clientHeight) {
    console.log('invisible');
    showButton.value = false;
    document.querySelector('.backtotop').classList.remove('display__visible');
    document.querySelector('.backtotop').classList.add('display__hidden');
  }
})

function hiddenButton(e) {
  if (e) {
    setTimeout(() => {
      document.querySelector('.backtotop').style.zIndex = 0;
    }, 200);

  } else {
    setTimeout(() => {
      document.querySelector('.backtotop').style.zIndex = 2;
    }, 100);
  }
}
</script>

<template>
  <Header @active-menu="hiddenButton($event)" />
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
html {
  overflow-x: hidden;
}

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
  background-color: #f6767f;
  color: var(--text-color);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  opacity: 0;
  box-shadow: var(--box-shadow-nav);

  &:hover {
    background-color: var(--primary);
    transition: 0.3s all;
  }

  svg {
    font-size: 24px;
  }

  &.hidden {
    display: none;
  }
}

.app {
  max-width: 1200px;
  background-color: var(--background--primary);
  margin: auto !important;
  padding: 10px 20px !important;
}

main {
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: auto;
  z-index: 0;
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