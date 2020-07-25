# Exampples <!-- omit in toc -->

- [Zero configuration](#zero-configuration)
- [Adding selectors](#adding-selectors)
- [Adding options](#adding-options)
- [Using array of items](#using-array-of-items)

## Zero configuration

### Sample <!-- omit in toc -->

<ClientOnly>
  <zero-config />
</ClientOnly>

### Code <!-- omit in toc -->

```html
<vue-chocolat>
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
```

## Adding selectors

### Sample <!-- omit in toc -->

<ClientOnly>
  <adding-selectors />
</ClientOnly>

### Code <!-- omit in toc -->

```html
<vue-chocolat selector="a.lightbox">
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
```

## Adding options

### Sample <!-- omit in toc -->

<ClientOnly>
  <adding-options />
</ClientOnly>

### Options <!-- omit in toc -->

Full options list can be found in the [official doc](https://chocolat.gitbook.io/chocolat/options).

### Code <!-- omit in toc -->

```html
<vue-chocolat :options="{ loop: true }">
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
```

## Using array of items

### Sample <!-- omit in toc -->

<ClientOnly>
  <using-array />
</ClientOnly>

### Code <!-- omit in toc -->

```javascript
const items = [
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
```

```html
<button @click="() => this.$refs.instance.api.open()">
  Open the gallery
</button>

<vue-chocolat :items="items" ref="instance" />
```
