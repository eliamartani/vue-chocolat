<template>
  <vue-chocolat class="container" selector="a.lightbox">
    <a
      href="https://media.giphy.com/media/E9uxGrsyXjnSU/giphy.gif"
      class="lightbox"
      title="Stuck pug"
    >
      Link 1
    </a>
    <a
      href="https://media.giphy.com/media/2xPJm26Rf1EMBTykwG/giphy.gif"
      class="lightbox"
      title="Swimming pug"
    >
      Link 2
    </a>
    <a
      href="https://media.giphy.com/media/Aj39oEtrbojkc/giphy.gif"
      target="_blank"
      title="Scared pug"
    >
      Link 3
    </a>
  </vue-chocolat>
</template>

<script>
export default {
  name: 'adding-selectors',
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
