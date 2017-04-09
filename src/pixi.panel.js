import './common'
import Vue from 'vue'
import VueRx from 'vue-rx'
import PixiPanel from './components/PixiPanel'
import './bootstrap.scss'
import Observable from 'rxjs/Observable'
import Subscription from 'rxjs/Subscription'

console.info('pixi.panel')

Vue.use(VueRx, { Observable, Subscription })

const vm = new Vue(PixiPanel)
vm.$mount('pixi-panel')
