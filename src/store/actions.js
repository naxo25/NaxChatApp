import { firebaseAuth, firebaseDb, db, storageRef } from 'boot/firebase';
import { decodeBase64 } from 'boot/encript.js'

//console
let //quizRef, intllamada,
	userId;

const actions = {
	//Inicial
	handleAuthStateChanged({ commit, dispatch }) {
		firebaseAuth.onAuthStateChanged(user => {
		  if (user) {
		    userId = firebaseAuth.currentUser.uid;
			dispatch('Gets');
		    dispatch('GetUser');
		    dispatch('UpdateUser', {
		    	online: true
		    });
		    if (firebaseAuth.currentUser.email == '000nax@gmail.com') {
		    	//dispatch('GetTareas');
				commit('Admin', 1);
			}
		    dispatch('preload');
		    this.$router.push('/users');
			// dispatch('Get_sw')
		  } else {
		  	commit('changeValue' ,0, 0);
		  	commit('limpiar', {});
		  	dispatch('borrar_sw')
		  	dispatch('UpdateUser', {
		  		online: false
		  	});
		  	this.$router.replace('/Login');
		  }
		})
	},
	preload({commit}){
		commit('changeValue' ,100, 2000);
		setTimeout( ()=> { commit('changeLoader',0); }, 1500);
	},
	//Gets
	GetFotos({ commit, state }) {
	},
	async Gets({commit,state,dispatch}) {

		// Pasando datos a collection
		// await firebaseDb.ref('users/').on('child_added', (snapshot) => {
		// 	let d = snapshot.val();
		// 	let details = {};
		// 	details.name = d.name;
		// 	details.img = d.img || state.noimg;
		// 	details.img_thumb = d.img_thumb || state.noimg;
		// 	db.collection('users').doc(snapshot.key).set(details)
		// 	if (d.amigos){
		// 		Object.keys(d.amigos).forEach((key) => {
		// 			db.collection('users').doc(snapshot.key+'/amigos/'+key).set({amigos:d.amigos[key]})
		// 		})
		// 	}
	 //    });

		let ruta = 'users/' + userId + '/amigos';
		// let amigos = await db.collection('users/'+userId+'/amigos').doc().get()
		// console.log(amigos.Id)
	    //console.time(1) //
		db.collection(ruta).onSnapshot((querySnapshot) => {
	      querySnapshot.forEach( async (snapshot) => {
			let amigo = await db.collection('users/').doc(snapshot.id).get();
			let ultMsj = snapshot.data()
			let d = amigo.data();
			if (ultMsj.ultFech) {
				d.hora = ultMsj.ultFech.split(' ')[0]
				d.fecha = ultMsj.ultFech.slice(-8)
			} 
			const {img,...details} = {
				img: d.img||state.noimg,
				name: d.name,
				email: d.email || '',
				ultChat: ultMsj.ultChat || ' - Sin mensajes - ',
				cant_msjs: ultMsj.cant_msjs || '',
				hora: d.hora || '',
				fecha: d.fecha || '',
				img_thumb: d.img_thumb || state.noimg,
			}
			commit('add', {
				Id: amigo.id,
				details,
				item: 'amigos'
			});
			commit('add', {
				Id: amigo.id,
				details: img,
				item: 'imgs'
			});
	      });
	    });
	    //console.timeEnd(1)
	    /*console.time(2) // 2.8
		db.collection(ruta).onSnapshot((querySnapshot) => {
	      querySnapshot.forEach( (snapshot) => {
			let ultMsj = snapshot.data()
			let exis = db.collection('users/').doc(snapshot.id)
			exis.get().then(doc => {
				let d = doc.data();
				let details = {};
				details.name = d.name;
				details.ultChat = ultMsj.ultChat || ' - Sin mensajes - '
				if (ultMsj.ultFech) {
					details.hora = ultMsj.ultFech.split(' ')[0]
					details.fecha = ultMsj.ultFech.slice(-8)
				}
				details.cant_msjs = ultMsj.cant_msjs || '';
				details.img_thumb = d.img_thumb || state.noimg;
				details.key = d.key || ''
				details.p = d.p || ''
				commit('add', {
					Id: exis.id,
					details,
					item: 'amigos'
				});
				commit('add', {
					Id: exis.id,
					details: d.img||state.noimg,
					item: 'imgs'
				});
			})
	      });
	    });
	    console.timeEnd(2)*/

		if (state.desarrollo == 0){
		let email = firebaseAuth.currentUser.email.split('.')[0];
		ruta = firebaseDb.ref('solicitudes/' + email);
		ruta.on('child_added', async snapshot => {
			let exis = await db.collection('users/').doc(snapshot.key)
			exis.get().then(doc => {
				let d = doc.data();
				if (d) {
					let details = {};
					details.img_thumb = d.img_thumb || state.noimg;
					details.name = d.name;
					commit('add', {
						Id: exis.id,
						details,
						item: 'solicitudes'
					});
					commit('add', {
						Id: exis.id,
						details: d.img||state.noimg,
						item: 'imgs'
					});
				}
			})
		});

		ruta = firebaseDb.ref('chats/' + userId);
		ruta.on('child_added', snap => {
			firebaseDb.ref('chats/'+userId+'/'+snap.key).on('value', snapshot => {
					let Id = snapshot.key;
					let details = snapshot.val();
					commit('add', {
						Id,
						details,
						item: 'messages'
					});
			});
		});
		}

	},

  	async Get_sw({state,commit}){

  	  let exis = await db.collection('sw/').doc(localStorage.email).get();

  	  //console.log(localStorage)
  	  //console.log(exis.exists)
  	  //console.log(exis.data())
  	  if (exis.exists) {
  	  	 //exis = await db.collection('sw/').doc(localStorage.email).get();
  	  	 commit('get_sw', exis.data())
  	  } else {
		  let request = await fetch(state.puertoNotis + "/get/" + localStorage.email, {
		    method: "GET",
		    headers: {
		      "Content-Type": "application/json"
		    }
		  }).then(response => response.json())
		  .then(data => { commit('get_sw', data)
			  db.collection('sw').doc(localStorage.email).set(data)
		  })
		  //console.log('ahsdhash')
	  }
  	},
	
	//userDetails
	async registerUser({state,dispatch}, payload) {
		let mail = payload.email;
		await firebaseAuth.createUserWithEmailAndPassword(mail, payload.password)
			.then(response => {
				let userId = firebaseAuth.currentUser.uid;
				db.collection('users/').doc(userId).set({
					name: payload.name,
					email: mail,
					online: true,
					img_thumb: state.noimg,
					img: state.noimg,
				});
				let email = mail.split('.')[0];
				//solicitudes  de ejemplo iniciales
				dispatch('querys', { tipo: 'solicitudes', email, friend: 'HFnFNtlwr6ZrLlD0avnN0nAhWuo1' }) //Muñeca
				dispatch('querys', { tipo: 'solicitudes', email, friend: 'TdGPSSmjzFVDYcafnq8ZJd8IPN62' }) //Killer
				dispatch('querys', { tipo: 'solicitudes', email, friend: '60teQqCd5dOD6b8wfgVBKA2en2O2' }) //asd
				dispatch('querys', { tipo: 'solicitudes', email, friend: 'sBnPKFoqjiSSIkGDk01pjHCZ3lA2' }) //krhina
				dispatch('querys', { tipo: 'solicitudes', email, friend: 'kI4GG1j4mFWCO20sUiigYC3cTGK2' }) //

				firebaseDb.ref('users/E3tiSF4LypQiX2B7v148h9vK0AQ2/amigos/'+userId).set({null:''});
				firebaseDb.ref('users/'+userId+'/amigos/E3tiSF4LypQiX2B7v148h9vK0AQ2').set({null:''});
				db.collection('users/').doc(userId+'/amigos/E3tiSF4LypQiX2B7v148h9vK0AQ2').set({ null:'' });
				db.collection('users/').doc('E3tiSF4LypQiX2B7v148h9vK0AQ2/amigos/'+ userId).set({ null:'' });

				dispatch('querys', { tipo:'chat', user1: 'E3tiSF4LypQiX2B7v148h9vK0AQ2', user2: userId, msg: { cant_msjs:1, 'from':'them', tipo:'text', 'text': 'Bienvenido a mi aplicación móvil', 'textweb': 'Bienvenido a mi aplicación móvil' } })
				dispatch('querys', { tipo:'chat', user2: 'E3tiSF4LypQiX2B7v148h9vK0AQ2', user1: userId, msg: { cant_msjs:1, 'from':'them', tipo:'text', 'text': 'Bienvenido a mi aplicación móvil', 'textweb': 'Bienvenido a mi aplicación móvil' } })

			})
			.catch(error => {
				alert(error.message);
			})
	},
	loginUser({}, payload) {
		let email = payload.email //+ payload.tipoEmail;
		firebaseAuth.signInWithEmailAndPassword(email, payload.password).catch(error => { 
			alert(error.message);
		})
	},
	logoutUser() {
		firebaseAuth.signOut();
	},
	GetUser({ commit }) {
		let exis = db.collection('users/').doc(userId)
		exis.get().then(doc => {
			let d = doc.data();
	    	commit('setUserDetails', {
	    		name: d.name,
	    		email: firebaseAuth.currentUser.email,
	    		userId: userId,
	    		img: d.img,
	    		img_thumb: d.img_thumb,
	    	});
	    });
	    // actualizar email a los que no lo tienen en bd
	    exis.update({email: firebaseAuth.currentUser.email})
	},
	UpdateUser({}, online) {
		if (userId) {
			db.collection('users').doc(userId).update(online );
		}
	},
  	async borrar_sw({}){
  		if(window.navigator && navigator.serviceWorker) {
		  navigator.serviceWorker.getRegistrations()
		  .then(function(registrations) {
		    for(let registration of registrations) {
		      registration.unregister();
		    }
		  });
		}
		await db.collection('sw/').doc(localStorage.email).delete();
  	},

	//querys
	async querys({}, payload){
		switch (payload.tipo) {
			case 'notificarmsg': await db.collection('users/').doc(payload.user1+'/amigos/'+ payload.user2).update(payload.details); break;
			case 'solicitudes': await firebaseDb.ref('solicitudes/' + payload.email + '/' + payload.friend).set({null:''}); break;
			case 'chat': await firebaseDb.ref('chats/' + payload.user1 + '/' + payload.user2).push(payload.msg); break;
		}
	},
	changeOtherId({state,commit}, payload){
		commit('changeOtherId', payload);
		db.collection('users/').doc(userId+'/amigos/'+ state.otherId).update({ 'cant_msjs':0 })
	},


	//Perfil
	cambiar_foto_Perfil({ commit,state }, payload) {
		commit('updateItemPerfil', payload);
		switch (payload.item) {
			case 'imagen': db.collection('users').doc(userId).update({ img: payload.img }); break;
			case 'img_thumb': db.collection('users').doc(userId).update({ img_thumb: payload.img_thumb }); break;
		}
	},

	cambiarNombre({ commit, state }, payload) {
		payload.item = 'name';
		commit('updateItemPerfil', payload);
		db.collection('users').doc(userId).update({ name: payload.name});
	},

	borrarFotoPerfil( { commit, state }, ruta ) {
		var payload = {};
		payload.item = 'imagen';
		payload.img = state.noimg;
		commit('updateItemPerfil', payload);
		payload.item = 'img_thumb';
		payload.img_thumb = state.noimg;
		commit('updateItemPerfil', payload);
		db.collection('users').doc(userId).update({ img: state.noimg, img_thumb: state.noimg });
		storageRef.child(ruta).delete();
	},

	//Chats
	async RecibeMessage({dispatch,state}, payload) { //them

		let ultChat, ultNoti, email_friend = state.amigos[state.otherId].email;
		payload.from = 'them';

		dispatch('querys', { tipo: 'chat', user1: state.otherId, user2: userId, msg: payload});

		if (payload.tipo == 'text') { ultNoti = payload.text; ultChat = decodeBase64(ultNoti);//.substring(0,18);
		} else if (payload.tipo == 'url') { ultNoti = 'Te ha enviado un archivo'; ultChat = 'Archivo';
		} else if (payload.tipo == 'foto') { ultNoti = 'Te envio una Foto'; ultChat = 'Foto';
		} else if (payload.tipo == 'gif') { ultNoti = 'Te envio un gif'; ultChat = 'Gif'; }

        await fetch(state.puertoNotis + 'new-message/' + email_friend, {
          method: 'POST',
          body: JSON.stringify({ title: state.userDetails.name, message: ultChat, img_thumb: state.userDetails.img_thumb
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        });

		dispatch('querys', { tipo:'notificarmsg', user1: userId, user2: state.otherId, details: { ultChat, ultFech: payload.hora } });
		dispatch('querys', { tipo:'notificarmsg', user2: userId, user1: state.otherId, details: { ultChat, 'cant_msjs':1, ultFech: payload.hora } });
		firebaseDb.ref('notis/' + state.otherId).update({ name: state.userDetails.name, ultNoti, id:userId });
	},

	SendMessage( { dispatch, state }, payload ) { //me
		payload.from = 'me';
		if (state.Admin == 1) { alert(payload.tipo); alert(payload.text) }
		dispatch('querys', { tipo: 'chat', user1: userId, user2: state.otherId, msg: payload});
	},

	subirArchivo( { dispatch }, payload ) {

      storageRef.child(payload.ruta).put(payload.file).on('state_changed', snapshot =>{},
        error=>{ ()=> alert(error.message) },
        ()=>{
          storageRef.child(payload.ruta).getDownloadURL().then((urlStorage)=>{
            dispatch('SendMessage', { tipo: payload.tipo, text: urlStorage, textweb: urlStorage, hora: payload.hora } );
            dispatch('RecibeMessage', { tipo: payload.tipo, text: urlStorage, textweb: urlStorage, hora: payload.hora } );
          })
          .catch();
        }
      );

	},

	StopGettingMessages({ commit }) {
	},

}

export default actions;