<template>
  <vue-chocolat class="container">
    <a
      href="https://media.giphy.com/media/apRvTFYSP5oAw/giphy.gif"
      title="Suspicious pug"
    >
      <img
        src="https://media.giphy.com/media/apRvTFYSP5oAw/giphy.gif"
        alt="Suspicious pug"
      />
    </a>
    <a
      href="https://media.giphy.com/media/1d7F9xyq6j7C1ojbC5/giphy.gif"
      title="Dog smiling"
    >
      <img
        src="https://media.giphy.com/media/1d7F9xyq6j7C1ojbC5/giphy.gif"
        alt="Dog smiling"
      />
    </a>
  </vue-chocolat>
</template>

<script>
export default {
  name: 'zero-config',
  components: {
    'vue-chocolat': () => import('../../../src/vue-chocolat')
  }
}
</script>

<style scoped>
a {
  flex: auto;
  max-height: 234px;
  overflow: hidden;
}
img {
  width: 100%;
}
.container {
  display: flex;
  flex-direction: row;
}
</style>
