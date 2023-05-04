import Vue from 'vue'
import * as components from '~/components/component.js'
Object.keys(components).forEach((key) => {
  Vue.component(components[key].name, components[key])
})
