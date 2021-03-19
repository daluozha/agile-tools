import { h } from 'snabbdom/src/package/h'
import { init } from 'snabbdom/src/package/init'

const patch = init([])
let vnode = h('div#app', 'Hello Leo')
const app = document.getElementById('app')
patch(app, vnode)