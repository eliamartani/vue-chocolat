# vue-chocolat

VueJs component to work with `Chocolat` 🐴

## Table of Contents

- [vue-chocolat](#vue-chocolat)
  - [Table of Contents](#table-of-contents)
  - [Install](#install)
    - [In package.json](#in-packagejson)
    - [In Component](#in-component)
  - [Props](#props)
  - [API](#api)
    - [Todo list](#todo-list)
  - [Examples](#examples)
    - [Todo list](#todo-list-1)
  - [Reference](#reference)
  - [License](#license)

## Install

### In package.json

The component can be installed by executing

```bash
npm install --save vue-chocolat
# or yarn add vue-chocolat
```

### In Component

Add it globally

```javascript
import vueChocolat from 'vue-chocolat'

// ...

Vue.component('vue-chocolat', vueChocolat)
```

or locally

```javascript
import vueChocolat from 'vue-chocolat'

// ...

export default {
  // ...
  components: {
    'vue-chocolat': vueChocolat
    // or even in a async way
    // 'vue-chocolat': () => import('vue-chocolat')
  }
}
```

## Props

No properties are required altough you'll have a better control over the component when using it.

- items
  - default: `null`
  - required: `false`
  - type: `Array`
  - [Reference link](https://chocolat.gitbook.io/chocolat/usage#instanciating-using-javascript-objects)
- options
  - default: `undefined`
  - required: `false`
  - type: `Object`
  - [Reference link](https://chocolat.gitbook.io/chocolat/options)
- selector
  - default: `:scope > a`
  - required: `false`
  - type: `String`

`items` create a gallery, `selector` creates a collection of clickable elements. You can't use both of them at once.

## API

[Reference link](https://chocolat.gitbook.io/chocolat/api)

When creating a `<vue-chocolat>` component you'll have access to its `api` by adding a `ref` attribute to it.

```html
<!-- Name whatever you prefer instead of `instance` -->
<vue-chocolat ref="instance"></vue-chocolat>
```

```javascript
someMethod() {
  const { api } = this.$refs.instance

  // see the reference link to full detailed information
  api.open(1)
  api.close()
  api.next()
  api.prev()
  // etc
}
```

### Todo list

- [ ] Improve API interface

## Examples

Examples can be found here:

- [Examples](EXAMPLES.md)

Live examples can be found at Chocolat's page.

### Todo list

- [ ] Create demo pages

## Reference

- http://chocolat.insipi.de/

## License

[MIT](LICENSE)
