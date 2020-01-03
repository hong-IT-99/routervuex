<template>
  <div id="app" class="container">
    <h1>Router Vue</h1>
    <hr />
    <AppHeader />
    <div class="text-center">
      <router-view />
    </div>
     <hr />
    <AppResult :result="result" />
    <hr />
    <AppCounter @updated="result += $event" />
  </div>
</template>

<script>
import AppHeader from "./components/layouts/Header";

import AppResult from "./components/user/Result";
import AppCounter from "./components/user/Counter";


export default {
  data() {
    return {};
  },
  components: {
    AppHeader,
    
    AppResult,
    AppCounter,
  }
};
</script>

<style>
</style>
