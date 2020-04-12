# Examples

- [Examples](#examples)
  - [Zero configuration](#zero-configuration)
  - [Adding selectors](#adding-selectors)
  - [Adding options](#adding-options)
  - [Using array of items](#using-array-of-items)

## Zero configuration

```html
<vue-chocolat>
  <a href="https://source.unsplash.com/random" title="Image 1 from Unsplash">
    <img
      src="https://media.giphy.com/media/apRvTFYSP5oAw/giphy.gif"
      alt="Suspicious pug"
    />
  </a>
  <a href="https://source.unsplash.com/random" title="Image 2 from Unsplash">
    <img
      src="https://media.giphy.com/media/1d7F9xyq6j7C1ojbC5/giphy.gif"
      alt="Dog smiling"
    />
  </a>
</vue-chocolat>
```

## Adding selectors

```html
<vue-chocolat selector="a.lightbox">
  <a
    href="https://source.unsplash.com/random"
    class="lightbox"
    title="Image 1 from Unsplash"
  >
    Link 1
  </a>
  <a
    href="https://source.unsplash.com/random"
    class="lightbox"
    title="Image 2 from Unsplash"
  >
    Link 2
  </a>
  <a href="https://source.unsplash.com/random" title="Image 3 from Unsplash">
    Link 3
  </a>
</vue-chocolat>
```

## Adding options

Full options list can be found in the [official doc](https://chocolat.gitbook.io/chocolat/options).

```html
<vue-chocolat :options="{ loop: true }">
  <a href="https://source.unsplash.com/random" title="Image 1 from Unsplash">
    Link 1
  </a>
  <a href="https://source.unsplash.com/random" title="Image 2 from Unsplash">
    Link 2
  </a>
  <a href="https://source.unsplash.com/random" title="Image 3 from Unsplash">
    Link 3
  </a>
</vue-chocolat>
```

## Using array of items

```javascript
const items = [
  {
    src: 'https://source.unsplash.com/random',
    title: 'Image 1 from Unsplash'
  },
  {
    src: 'https://source.unsplash.com/random',
    title: 'Image 2 from Unsplash'
  },
  {
    src: 'https://source.unsplash.com/random',
    title: 'Image 3 from Unsplash'
  }
]
```

```html
<button @click="() => this.$refs.instance.api.open()">
  Open the gallery
</button>

<vue-chocolat :items="items" ref="instance" />
```
