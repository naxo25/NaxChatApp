import { firebaseAuth, firebaseDb, db } from 'boot/firebase';

const actions_friends = {

	async querys({}, payload){
		switch (payload.tipo) {
			case 'delete': await db.collection('users/').doc(payload.user1+'/amigos/'+ payload.user2).delete(); break;
			case 'accept': await db.collection('users/').doc(payload.user1+'/amigos/'+ payload.user2).set(payload.msg); break;
		}
	},

	async Solicitud({state}, payload){
		let name = payload.item;
		let email = name+payload.tipo;

		if (state.userDetails.email != email) {
			email = email.split('.')[0];
			var solicitud = firebaseDb.ref('solicitudes/'+email+'/'+state.userDetails.userId);
			await solicitud.once('value', snapshot => { state.exis = snapshot.val() });
			if (state.exis) {
				Push.create('Mensaje',{ body: 'La solicitud ya fue enviada', timeout: 2500 });
			} else {
				solicitud.update({ estado: 'enviada' });
				Push.create('Tu solicitud fue enviada correctamente',{ timeout: 2500 });
			}
		} else {
			Push.create('No te puedes agregar a ti mismo',{ timeout: 2500 });
		}
	},
	Accept({ dispatch, state }, payload){
		let key = payload.amigo;
		let email = firebaseAuth.currentUser.email.split('.')[0];
		dispatch('querys', { tipo:'accept', user1: state.userDetails.userId, user2: key, msg: {cant_msjs: 'N', ultChat: '-', ultFech: '-'} });
		dispatch('querys', { tipo:'accept', user1: key, user2: state.userDetails.userId, msg: {cant_msjs: 'N', ultChat: '-', ultFech: '-'} });
		dispatch('Borrado', { email, key, msj: 'Acepto tu solicitud' });
		firebaseDb.ref('solicitudes/'+email+'/'+key).off('value');
	},
	async Borrado({state,commit}, payload){
		firebaseDb.ref('solicitudes/' + payload.email + '/' + payload.key ).remove();
        await fetch('https://swnotis.herokuapp.com/new-message/' + payload.email, {
          method: 'POST',
          body: JSON.stringify({ title: state.userDetails.name, message: payload.msj, img_thumb: state.userDetails.img_thumb
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        });
	},
	RemoveSolicitud({dispatch}, payload){
		let key = payload.amigo;
		let ruta = 'users/' + key;
		let email = firebaseAuth.currentUser.email.split('.')[0];
		dispatch('Borrado', { email, key, msj: 'Rechazo tu solicitud' });
		firebaseDb.ref(ruta).off('value');
	},
	clearMessages({commit,state}) {
		commit('clearMessages');
		firebaseDb.ref('chats/' + state.userDetails.userId +'/'+ state.otherId).remove();
	},
	clearFriend({commit,state,dispatch}) {
		dispatch('clearMessages');
		dispatch('querys', { tipo: 'delete', user1: state.userDetails.userId, user2: state.otherId });
		dispatch('querys', { tipo: 'delete', user2: state.userDetails.userId, user1: state.otherId });
		firebaseDb.ref('users/'+state.otherId).off('value');
		commit('clearFriend', state.otherId);
		this.$router.push('/');
	},

}

export default actions_friends;