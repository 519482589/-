import Vue from 'vue'
import Vuex from 'vuex'
import test from './test.js'
import user from './user'
import cart from './cart'
import address from './address'

Vue.use(Vuex)

let store = new Vuex.Store({
  modules:{
    test,
    user,
    cart,
    address
  }
})

export default store