import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import pageJson from "./assets/dummy";

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		'page_title': 'Some Portal',
		'name': 'Zero',
		'time': new Date().toLocaleString(),
		'pageJson': [],
		'answers': {}
	},
	mutations: {
		updateAnswer(state, args){
			if(args.id){
				state.answers[args.id] = args.answer
			}
		},
		updatePageJson(state, args){
			if(args && args.pageJson){
				// console.log(args.pageJson)
				state.pageJson = args.pageJson
				if(args.pageJson.title){
					state.page_title = args.pageJson.title
				}
			}
		}
	},
	actions: {
		getPageJson({ commit, state, dispatch }, args){
			// Make server request
			// axios.get('/dummy.json').then(function(response){
			// 	console.log(response);
			// })
			commit('updatePageJson', pageJson)
		}
	}
})