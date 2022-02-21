<template>
  <h1>Tesla reaction timer</h1>
  <button @click="start" :disabled="isPlaying">play</button>
  <Block v-if="isPlaying" :delay="delay" @end="endGame"/>
  <Results v-if="showScore" :score="score" />
</template>

<script>

import Block from "./components/Block.vue"
import Results from "./components/Results.vue"

export default {
  name: 'App',
  data() {
    return {
      isPlaying: false,
      delay: null,
      score: null,
      showScore: false
    }
  },
  components: { Block, Results },
  methods: {
    start() {
        this.delay = 2000 + Math.random() * 5000
        this.isPlaying = true
        this.showScore = false
    },
    endGame(reactionTime) {
      this.score = reactionTime
      this.isPlaying = false
      this.showScore = true
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #444;
  margin-top: 60px;
}
</style>
