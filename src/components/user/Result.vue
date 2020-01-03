<template>
  <div>
    <button class="btn btn-success" @click="tang">Up</button>
    <hr>
    <button class="btn btn-success" @click="giam">Down</button>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
     
    };
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