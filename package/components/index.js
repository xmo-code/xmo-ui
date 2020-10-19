import './styles/index.scss'

import Button from './components/button/index'
import Loading from './components/loading/index'

import Toast from './components/toast/index'

const components = {
  Button,
  ButtonGroup: Button.group,
  Loading
}

const install = function (Vue) {
  if (install.installed) return
  Object.keys(components).forEach(key => {
    Vue.component(components[key].name, components[key])
  })

  Vue.prototype.$toast = Toast
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

const API = {
  install,
  ...components
}

export default API
