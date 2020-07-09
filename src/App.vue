<template>
  <div>
    <h1 class="display-4 text-center mb-5">Get Jokes?</h1>
    <div class="container">
      <div class="row">
        <div class="col-12 text-center mb-3">
          <button class="btn btn-primary mx-2" @click="initJokes">Add Ten Random Jokes</button>
          <button class="btn btn-primary mx-2" @click="addJoke">Add a Joke</button>
        </div>
        <div class="col-12 text-center">
          <template v-for="(type,i) in types">
            <div class="form-check form-check-inline ml-3" :key="i">
              <input class="form-check-input" type="checkbox" :id="i" :value="type" v-model="checkedTypes" checked>
              <label class="form-check-label" :for="i">{{type}}</label>
            </div>
          </template>
        </div>
      </div>
      <hr>
      <div class="row mb-5">
        <Joke v-for="(joke, i) in $store.state.jokes" :key="i" :joke="joke" :index="i" v-show="checkedTypes.includes(joke.type)"/>
      </div>
    </div>
  </div>
</template>

<script>
import Joke from "./components/Joke";
export default {
  name: "app",
  data() {
    return {
      types: ["general", "knock-knock", "programming"],
      checkedTypes:["general", "knock-knock", "programming"]
    };
  },
  methods: {
    initJokes() {
      this.$store.dispatch("initJokes");
    },
    addJoke() {
      this.$store.dispatch("addJoke");
    }
  },
  components: {
    Joke
  }
};
</script>

<style lang="scss">
</style>
