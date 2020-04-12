import Chocolat from 'chocolat'
import 'chocolat/dist/css/chocolat.css'

const component = {
  name: 'vue-chocolat',
  template: '<div class="vue-chocolat"><slot /></div>',
  props: {
    items: {
      default: null,
      required: false,
      type: Array
    },
    options: {
      default: undefined,
      required: false,
      type: Object
    },
    selector: {
      default: ':scope > a',
      required: false,
      type: String
    }
  },
  data() {
    return {
      api: null,
      defaultSelector: ':scope > a'
    }
  },
  mounted() {
    this.createChocolat()
  },
  beforeDestroy() {
    this.api && this.api.destroy()
  },
  methods: {
    createChocolat() {
      const elements = this.getElements()
      const { api } = Chocolat(elements, this.options)

      this.api = api
    },
    getElements() {
      if (this.items && this.items.length) {
        return this.items
      }

      return this.$el.querySelectorAll(this.selector || this.defaultSelector)
    }
  }
}

export default component
