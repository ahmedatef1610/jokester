<template>
  <div class="col-12 col-md-6 mb-3">
    <div class="card">
      <div class="card-body">
        <button class="close" @click="removeJoke(index)">&times;</button>
        <p class="card-text font-weight-bold">{{joke.setup}}</p>
        <p class="card-text font-italic">{{joke.punchline}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["joke", "index"],
  methods: {
    removeJoke(index) {
      this.$store.dispatch("removeJoke", index);
    }
  }
};
</script>

<style>
</style>
