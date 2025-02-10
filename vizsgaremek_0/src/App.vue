<template>
  <Navbar />
  <main>
    <RouterView />
  </main>
</template>

<script>
import Navbar from './components/layout/Navbar.vue';
import { RouterView } from 'vue-router'

export default {
  components: {
    RouterView,
    Navbar
  }
}
</script>

<style>
body{
  background-image: linear-gradient(to bottom right, black, #00ff2b);
  background-attachment: fixed;
}
</style>