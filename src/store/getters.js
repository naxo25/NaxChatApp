
const getters = {
	notis: state => { return state.notis; },
	messages: state => { return state.mensajes; },
	solicitudes: state => { return state.solicitudes; },
	amigos: state => { return state.amigos },
	user: state => { return state.userDetails; }
}

export default getters;