<template>
  <div>
    <AppResult :result="result" />
    <hr />
    <AppCounter @updated="result += $event" />
    <button class="btn btn-success" @click="tang">Up</button>
    <hr/>
    <button class="btn btn-success" @click="giam">Down</button>
  </div>
</template>
 
<script>
import AppResult from "./Result";
import AppCounter from "./Counter";
export default {
  data() {
    return {};
  },
  components: {
    AppResult,
    AppCounter
  },
  methods: {
    tang() {
      this.$store.dispatch("up");
    },
    giam() {
      this.$store.dispatch("down");
    }
  }
};
</script>

<style >
</style>