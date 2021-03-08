import Vue from 'vue';
//console.log()

const mutations = {
	loads(state, payload) { //carga inicial
		state.loads = payload;
	},
	loadings(state) { //Efecto users
		state.loadings = false;
	},

	cambiarOpcion(state, payload){
		state.opcion = payload;
	},

	incremental(state, payload){
		state.time = payload;
	},

	//cambia other
	changeOtherId(state, payload) {
		state.otherId = payload;
		//state.amigos[state.otherId].cant_msjs = 0 
	},
	//animacion de inicio
	changeLoader(state, payload) {
		state.loader = payload;
	},
	changeValue(state,carga,tiempo) {
		state.pretime = tiempo;
		state.value = carga;
	},
	//perfil
	updateItemPerfil(state, payload) {
		switch (payload.item) {
			case 'name': state.userDetails.name = payload.name; break;
			case 'imagen': state.userDetails.img = payload.img; break;
			case 'img_thumb': state.userDetails.img_thumb = payload.img_thumb; break;
		};
	},
	//usuario
	setUserDetails(state, payload) {
		state.userDetails = payload;
		localStorage.email = payload.email;
	},
	keys(state, payload){
		state.keys = payload
	},
	//comunicacion de componente preview y perfil
	changePre(state, payload){
		state.changePre = payload;
	},
	
	//cierre de sesion
	limpiar(state) {
		state.userDetails = {};
		state.amigos = {};
		state.solicitudes = {};
		state.quiz = {};
	},

	//limit de gets amigos
	changeLimit(state, payload) {
		state.limit += 5;
		console.log(state.limit)
	},
	//get listas
	add(state, payload) {
	switch (payload.item) {
		case 'tareas': Vue.set(state.tareas, payload.Id, payload.details); break;
		case 'imgs': Vue.set(state.imgs, payload.Id, payload.details); break;
		case 'amigos': Vue.set(state.amigos, payload.Id, payload.details); break;
		case 'fotos': Object.assign(state.amigos[payload.Id], payload.details); break;
		case 'solicitudes': Vue.set(state.solicitudes, payload.Id, payload.details); break;
		case 'messages': Vue.set(state.mensajes, payload.Id, payload.details); break;
		case 'quiz': Vue.set(state.quiz, payload.Id, payload.details); break;
		case 'notis': Vue.set(state.notis, payload.details); break;
		}
	},
	GetMensajes(state, payload) {
		Vue.set(state.mensajes, payload.Id, state.messages);
	},
	recuperarMensajes(state) {
		state.messages = state.mensajes[state.otherId];
	},

	//observados, state_changed
	update(state, payload) {		
	switch (payload.item) {
		case 'tareas': Object.assign(state.tareas[payload.Id], payload.details); break;
		case 'amigos': Object.assign(state.amigos[payload.Id], payload.details); break;
		case 'solicitudes': Object.assign(state.solicitudes[payload.Id], payload.details); break;
		case 'quiz': Object.assign(state.quiz[payload.Id], payload.details); break;
		case 'notis': Object.assign(state.notis[payload.Id], payload.details); break;
		}
	},

	clearFriend(state, payload) {
		state.amigos[payload] = {}
		Vue.delete(state.amigos, payload)
	},
	//Mensajes
	clearMessages(state) {
		state.messages = {};
	},

	get_sw(state, payload) {
		state.get_sw = payload;
	}
	//Quiz en deshuso
	/*updateQuiz(state, payload) {		
        state.Nquiz = payload;
        state.Npregunta = 1;
	},
	updatePregunta(state, payload) {
		state.Npregunta = state.Npregunta + payload;
	},
	clearRquiz(state) {
		state.quiz = {};
	},*/
}

export default mutations;