<template>
  <div class="container">
    <button @click="handleClick">
      Open the gallery
    </button>

    <vue-chocolat :items="items" ref="instance" />
  </div>
</template>

<script>
export default {
  name: 'using-array',
  components: {
    'vue-chocolat': () => import('../../../src/vue-chocolat')
  },
  data() {
    return {
      items: [
        {
          src: 'https://media.giphy.com/media/IrFqA9fFseZaM/giphy.gif',
          title: 'Smart cow'
        },
        {
          src: 'https://media.giphy.com/media/bympeqWadSL3G/giphy.gif',
          title: 'Friendly cow'
        },
        {
          src: 'https://media.giphy.com/media/LilPRDHg9Qre0/giphy.gif'
        }
      ]
    }
  },
  methods: {
    handleClick() {
      this.$refs.instance.api.open()
    }
  }
}
</script>

<style scoped>
button {
  appearance: none;
  background: #3eaf7c;
  border: 0;
  border-radius: 0;
  color: #fff;
  cursor: pointer;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
  font-weight: 500;
  margin: 0;
  padding: 0.5rem 1rem;
}
.container {
  box-sizing: border-box;
  padding: 2rem 0;
}
</style>
