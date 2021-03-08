import Vue from 'vue';
import state from './state';
import mutations from './mutations';
import actions from './actions_friends';
//import getters from './getters';
const getters = {}

export default {
	namespaced: true,
	state,
	actions,
	mutations,
}