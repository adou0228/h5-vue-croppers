import Avator from './Avator'

const install = function(Vue) {
  Vue.component('Avator', Avator);
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export { Avator }

export default {
  install,
  Avator,
  Avator: Avator
}
