<template>
  <vue-chocolat class="container" :options="{ loop: true }">
    <a
      href="https://media.giphy.com/media/nR4L10XlJcSeQ/giphy.gif"
      title="Cat advice"
    >
      Link 1
    </a>
    <a
      href="https://media.giphy.com/media/phJ6eMRFYI6CQ/giphy.gif"
      title="Cat in trouble"
    >
      Link 2
    </a>
    <a
      href="https://media.giphy.com/media/tBxyh2hbwMiqc/giphy.gif"
      title="Chasing the red dot"
    >
      Link 3
    </a>
  </vue-chocolat>
</template>

<script>
export default {
  name: 'adding-options',
  components: {
    'vue-chocolat': () => import('../../../src/vue-chocolat')
  }
}
</script>

<style scoped>
a + a {
  margin-left: 2rem;
}
.container {
  box-sizing: border-box;
  padding: 2rem 0;
}
</style>
