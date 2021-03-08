import Vue from 'vue';
import Vuex from 'vuex';
import store from './store';
import store_friends from './store_friends';
Vue.use(Vuex);

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      store,
      store_friends
    },
    strict: process.env.DEV
  })
  return Store
}