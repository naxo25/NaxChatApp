import { firebaseAuth, firebaseDb, db } from 'boot/firebase';

const actions_questions = {

	probando(){
		console.log(2)
	},

	/*//
	firebaseActualizaciones({}) {
	},
	// Llamada
	iniciarllamada({state}){
		var i = 0;
		var llamada = firebaseDb.ref('time/' + 'userId');
		intllamada = setInterval(()=>{ llamada.update({ time: i++ }); }, 800);
	},
	Actualizar({commit}){
		firebaseDb.ref('time/' + 'userId').on('child_changed', snapshot => {
			commit('incremental', snapshot.val());
		})
	},
	Stop(){
		clearInterval(intllamada);
		firebaseDb.ref('time/' + 'userId').off('child_changed');
	},
	toDatos({}, payload) {
		firebaseDb.ref('time/' + 'userId').update({ time: payload });
	},
	*/


	//Quiz
	/*GetTareas({ commit }) {
		firebaseDb.ref('users/'+userId+'/Nquiz/').on('child_added', snapshot => {
			firebaseDb.ref('Nquiz/'+snapshot.key).on('value', snapshot => {
				let details = snapshot.val();
				let Id = snapshot.key;
				commit('add', {
					Id,
					details,
					item: 'tareas'
				});
			});
		});
	},
	contestar({}, payload){
		let profeId = 'E3tiSF4LypQiX2B7v148h9vK0AQ2';
		let ruta = 'quiz hechos/' + userId + '/' + profeId + '/' + state.Nquiz + '/noti' + state.Npregunta;
		firebaseDb.ref(ruta).update({ 'respuesta': payload });
	},
	Rquiz({ commit, state }) {
		commit('clearRquiz');
		let userId = 'E3tiSF4LypQiX2B7v148h9vK0AQ2';
		let quizRef = firebaseDb.ref('/Nquiz/' + userId + '/' + state.Nquiz + '/noti' + state.Npregunta);		
		quizRef.on('child_added', snapshot => {
			let details = snapshot.val()
			let Id = snapshot.key;
			commit('add', {
				Id,
				details,
				item: 'quiz'
			});
		});
		quizRef.on('child_changed', snapshot => {
			let details = snapshot.val();
			let Id = snapshot.key;
			commit('update', {
				Id,
				details,
				item: 'quiz'
			});
		});
	},
	clearquiz({ commit, state }) {
		if (quizRef) {
			quizRef.off('child_added');
			commit('clearRquiz');
		}
	},*/

}

export default actions_questions;