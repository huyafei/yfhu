import Vue from 'vue'
// https://www.npmjs.com/package/js-cookie
import Cookies from 'js-cookie'
const PREFIX = 'YFHU'
const cookies = {
  set (name, value, options) {
    Cookies.set(PREFIX + '_' + name, value, options)
  },
  get (name) {
    return Cookies.get(PREFIX + '_' + name)
  },
  getJson (name) {
    return Cookies.getJSON(PREFIX + '_' + name)
  },
  remove (name, options) {
    Cookies.remove(PREFIX + '_' + name, options)
  }
}
Vue.prototype.$cookies = cookies
export default cookies
