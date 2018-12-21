import { assert } from 'chai'
import Vue from 'vue'
import App from 'src/App'

describe('App.vue', () => {
  it('Check store defined', () => {
    let vm = new Vue(App).$mount()
    console.log('store:' + vm.$store)
    assert.isDefined(vm.$store, 'Store should be defined')
  })
})
