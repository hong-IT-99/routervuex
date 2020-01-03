<template>
  <div id="app" class="container">
    <h1>Router Vue</h1>
    <hr />
    <AppHeader />
    <div class="text-center">
      <router-view />
    </div>
  </div>
</template>

<script>
import AppHeader from "./components/layouts/Header";

export default {
  data() {
    return {};
  },
  components: {
    AppHeader
  }
};
</script>

<style>
</style>
