(()=>{"use strict";var e={9526:(e,t,a)=>{a(71),a(5363);var s=a(8880),i=a(2424),o=a(3673),r=a(2323);const n={key:0,id:"q-app"},c={key:1,class:"absolute-center"},l=(0,o._)("div",{class:"nax-spinner"},null,-1),d=[l],u={key:1,class:"text-justify absolute-center"},m=(0,o._)("br",null,null,-1),h=(0,o._)("br",null,null,-1),p=(0,o._)("br",null,null,-1),g=(0,o.Uk)();function f(e,t,a,s,i,l){const f=(0,o.up)("router-view"),b=(0,o.up)("q-btn");return l.connection?((0,o.wg)(),(0,o.iD)("div",u,[(0,o.Uk)((0,r.zw)(l.connection)+" ",1),m,h,p,g,(0,o.Wm)(b,{label:"Recarga la página",onclick:"location.reload()"})])):((0,o.wg)(),(0,o.iD)("div",n,[e.$store.state.store.loadings?((0,o.wg)(),(0,o.iD)("div",c,d)):((0,o.wg)(),(0,o.j4)(f,{key:0}))]))}var b=a(3617);const v={methods:{...(0,b.nv)("store",["handleAuthStateChanged"])},computed:{connection(){return navigator.onLine?(this.handleAuthStateChanged(),!1):"No tienes acceso a internet, conectaté para poder usar NaxChatApp"}}};var y=a(2165),w=a(7518),k=a.n(w);v.render=f;const I=v;k()(v,"components",{QBtn:y.Z});var P=a(7439),_=a(7083),j=a(9582);const S=[{path:"/",component:()=>Promise.all([a.e(736),a.e(622)]).then(a.bind(a,9622)),children:[{path:"/users",component:()=>Promise.all([a.e(736),a.e(550)]).then(a.bind(a,4550))},{path:"/chat",component:()=>Promise.all([a.e(736),a.e(12)]).then(a.bind(a,8012))},{path:"/Login",component:()=>Promise.all([a.e(736),a.e(480)]).then(a.bind(a,4480))},{path:"/Registro",component:()=>Promise.all([a.e(736),a.e(659)]).then(a.bind(a,5659))}]},{path:"/initialRegister",component:()=>Promise.all([a.e(736),a.e(628)]).then(a.bind(a,6233))},{path:"/:catchAll(.*)*",component:()=>a.e(118).then(a.bind(a,8118))}],A=S,O=(0,_.BC)((function(){const e=j.r5,t=(0,j.p7)({scrollBehavior:()=>({left:0,top:0}),routes:A,history:e("")});return t}));async function M(e,t){const s="function"===typeof P["default"]?await(0,P["default"])({}):P["default"],{storeKey:o}=await Promise.resolve().then(a.bind(a,7439)),r="function"===typeof O?await O({store:s}):O;s.$router=r;const n=e(I);return n.use(i.Z,t),{app:n,store:s,storeKey:o,router:r}}const C={config:{}};var U=a(1413);(0,U.z)("service-worker.js",{ready(){},registered(){},cached(){},updatefound(){},updated(){},offline(){},error(){}}),/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&window.navigator.standalone&&a.e(736).then(a.t.bind(a,9501,23));const x="";async function N({app:e,router:t,store:a,storeKey:s},i){let o=!1;const r=e=>{try{return t.resolve(e).href}catch(a){}return Object(e)===e?null:e},n=e=>{if(o=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const t=r(e);null!==t&&(window.location.href=t,window.location.reload())},c=window.location.href.replace(window.location.origin,"");for(let d=0;!1===o&&d<i.length;d++)try{await i[d]({app:e,router:t,store:a,ssrContext:null,redirect:n,urlPath:c,publicPath:x})}catch(l){return l&&l.url?void n(l.url):void console.error("[Quasar] boot error:",l)}!0!==o&&(e.use(t),e.use(a,s),e.mount("#q-app"))}M(s.ri,C).then((e=>Promise.all([Promise.resolve().then(a.bind(a,5474))]).then((t=>{const a=t.map((e=>e.default)).filter((e=>"function"===typeof e));N(e,a)}))))},5474:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n,api:()=>r});var s=a(7083),i=a(52),o=a.n(i);const r=o().create({baseURL:"https://api.example.com"}),n=(0,s.xr)((({app:e})=>{e.config.globalProperties.$axios=o(),e.config.globalProperties.$api=r}))},2490:(e,t,a)=>{a.d(t,{lX:()=>r,N$:()=>n,$k:()=>c,db:()=>l,Fw:()=>d});var s=a(5720);a(4479),a(7758),a(1271),a(3602),a(8819);const i={apiKey:"AIzaSyDMpRz7qqXLS6dJCgMIyU7c3QXIkPwzQkI",authDomain:"asdf-3e590.firebaseapp.com",databaseURL:"https://asdf-3e590.firebaseio.com",projectId:"asdf-3e590",storageBucket:"asdf-3e590.appspot.com",messagingSenderId:"990553321355",appId:"1:990553321355:web:e461977aeb6c99d1bc098e",measurementId:"G-4YHRGW6XW7"},o=s.Z.initializeApp(i),r=o.auth(),n=o.database(),c=o.storage().ref(),l=o.firestore();let d=null;"localhost:8080"!==location.host&&"nacholabraweb.000webhostapp.com"!==location.host&&"asdf-3e590.web.app"!==location.host||(d=o.messaging())},7439:(e,t,a)=>{a.r(t),a.d(t,{default:()=>w});var s=a(7083),i=a(3617);const o={i8:"1.39"},r={pretime:0,loader:0,value:0,loadings:!0,changePre:!1,time:0,noimg:"quasar-logo.svg",opcion:"amigos",version:o.i8,desarrollo:0,get_sw:"",puertoNotis:"https://swnotis.herokuapp.com/",messages:{},mensajes:{},imgs:{},notis:{},otherId:0,userDetails:{},amigos:{},solicitudes:{},keys:{}};a(71);const n={loads(e,t){e.loads=t},loadings(e){e.loadings=!1},cambiarOpcion(e,t){e.opcion=t},incremental(e,t){e.time=t},changeOtherId(e,t){e.otherId=t},changeLoader(e,t){e.loader=t},changeValue(e,t,a){e.pretime=a,e.value=t},updateItemPerfil(e,t){switch(t.item){case"name":e.userDetails.name=t.name;break;case"imagen":e.userDetails.img=t.img;break;case"img_thumb":e.userDetails.img_thumb=t.img_thumb;break}},setUserDetails(e,t){e.userDetails=t,localStorage.email=t.email},keys(e,t){e.keys=t},changePre(e,t){e.changePre=t},limpiar(e){e.userDetails={},e.amigos={},e.solicitudes={},e.quiz={}},changeLimit(e,t){e.limit+=5},add(e,t){switch(t.item){case"imgs":e.imgs[t.Id]=t.details;break;case"amigos":e.amigos[t.Id]=t.details;break;case"fotos":Object.assign(e.amigos[t.Id],t.details);break;case"solicitudes":e.solicitudes[t.Id]=t.details;break;case"messages":e.mensajes[t.Id]=t.details;break;case"quiz":e.quiz[t.Id]=t.details;break;case"notis":e.notis[t.Id]=t.details;break}},GetMensajes(e,t){},recuperarMensajes(e){e.messages=e.mensajes[e.otherId]},update(e,t){switch(t.item){case"tareas":Object.assign(e.tareas[t.Id],t.details);break;case"amigos":Object.assign(e.amigos[t.Id],t.details);break;case"solicitudes":Object.assign(e.solicitudes[t.Id],t.details);break;case"quiz":Object.assign(e.quiz[t.Id],t.details);break;case"notis":Object.assign(e.notis[t.Id],t.details);break}},clearFriend(e,t){e.amigos[t]={}},clearSolicitud(e,t){e.amigos[t]={}},clearMessages(e){e.messages={}},get_sw(e,t){e.get_sw=t}},c=n;a(7965),a(6016),a(5363);var l=a(2490);let d,u=!1;const m={handleAuthStateChanged({commit:e,dispatch:t}){l.lX.onAuthStateChanged((a=>{if(a)d=l.lX.currentUser.uid,t("Gets"),t("GetUser"),t("UpdateUser",{online:!0}),"000nax@gmail.com"==l.lX.currentUser.email&&e("Admin",1),t("preload"),this.$router.push("/users"),l.Fw&&l.Fw.getToken({vapidKey:"BHGIoJCaPPDMVgIwIXm6e52RsTk24JGkcvDe6aSKnTxBxKZ_Q3stJ5XrEEERUMEHpcOxMJdXJWu9e3KGgSIzJEM"}).then((e=>{e&&l.db.collection("users").doc(d).update({pushToken:e})})).catch((e=>{console.log("An error occurred while retrieving token. ",e)})),u&&t("initialRegister");else{if(e("loadings"),!localStorage.firstLogin)return this.$router.push("/initialRegister"),localStorage.firstLogin=!0,!1;e("changeValue",0,0),e("limpiar",{}),t("borrar_sw"),t("UpdateUser",{online:!1}),this.$router.replace("/Login")}}))},preload({commit:e}){e("changeValue",100,2e3),setTimeout((()=>{e("changeLoader",0)}),1500)},async initialRegister({state:e}){setTimeout((async function(){const{name:t,email:a}=e.userDetails;fetch("https://fcm.googleapis.com/fcm/send",{method:"POST",headers:{Authorization:"key=AAAA5qGUL4s:APA91bFRBlViYfHqp67hnzF7Vyg-ltCa7XqwKhu3PyLWebVhfTRUGP-bm8lZBXrLqRM2tBXMZPivfcHX3Yd3uuupPAVGSzEVuMiUBie1cpfeBLjkVnO2ZCm-MBPz5Q9bsg7CgZicMM9d","Content-Type":"application/json"},body:JSON.stringify({to:e.amigos["E3tiSF4LypQiX2B7v148h9vK0AQ2"].pushToken,notification:{title:"Nuevo registro",body:"Se ha unido el usuario "+t+"\nEmail: "+a,mutable_content:!0,click_action:"https://asdf-3e590.web.app/#/users"}})})}),6e3)},async Gets({commit:e,state:t,dispatch:a}){let s="users/"+d+"/amigos";l.db.collection(s).onSnapshot((a=>{a.forEach((async a=>{let s=await l.db.collection("users/").doc(a.id).get(),i=a.data(),o=s.data();i.ultFech&&(o.hora=i.ultFech.split(" ")[0],o.fecha=i.ultFech.slice(-8));let{img:r,...n}={img:o.img||t.noimg,name:o.name,email:o.email||"",ultChat:i.ultChat||" Sin mensajes ",cant_msjs:i.cant_msjs||"",hora:o.hora||"",fecha:o.fecha||"",img_thumb:o.img_thumb||t.noimg,pushToken:o.pushToken||""};e("add",{Id:s.id,details:n,item:"amigos"}),e("add",{Id:s.id,details:r,item:"imgs"})}))}));let i=l.lX.currentUser.email.split(".")[0];s=l.N$.ref("solicitudes/"+i),s.on("child_added",(async a=>{let s=await l.db.collection("users/").doc(a.key);s.get().then((a=>{let i=a.data();if(i){let a={};a.img_thumb=i.img_thumb||t.noimg,a.name=i.name,e("add",{Id:s.id,details:a,item:"solicitudes"}),e("add",{Id:s.id,details:i.img||t.noimg,item:"imgs"})}}))})),s=l.N$.ref("chats/"+d),s.on("child_added",(t=>{l.N$.ref("chats/"+d+"/"+t.key).on("value",(t=>{let a=t.key,s=t.val();e("add",{Id:a,details:s,item:"messages"})}))})),await setTimeout((async()=>await e("loadings")),0)},async Get_sw({state:e,commit:t}){let a=await l.db.collection("sw/").doc(localStorage.email).get();if(a.exists)t("get_sw",a.data());else{await fetch(e.puertoNotis+"/get/"+localStorage.email,{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{t("get_sw",e),l.db.collection("sw").doc(localStorage.email).set(e)}))}},async registerUser({state:e,dispatch:t},a){let s=a.email;await l.lX.createUserWithEmailAndPassword(s,a.password).then((t=>{let i=l.lX.currentUser.uid;l.db.collection("users/").doc(i).set({name:a.name,email:s,online:!0,img_thumb:e.noimg,img:e.noimg});s.split(".")[0];l.db.collection("users/").doc(i+"/amigos/E3tiSF4LypQiX2B7v148h9vK0AQ2").set({null:""}),l.db.collection("users/").doc("E3tiSF4LypQiX2B7v148h9vK0AQ2/amigos/"+i).set({null:""}),u=!0})).catch((e=>{alert(e.message)}))},loginUser({},e){let t=e.email;l.lX.signInWithEmailAndPassword(t,e.password).catch((e=>{alert(e.message)}))},logoutUser(){l.lX.signOut(),location.reload()},GetUser({commit:e}){let t=l.db.collection("users/").doc(d);t.get().then((t=>{let a=t.data();e("setUserDetails",{name:a.name,email:l.lX.currentUser.email,userId:d,img:a.img,img_thumb:a.img_thumb})})),t.update({email:l.lX.currentUser.email})},UpdateUser({},e){d&&l.db.collection("users").doc(d).update(e)},async borrar_sw({}){window.navigator&&navigator.serviceWorker&&navigator.serviceWorker.getRegistrations().then((function(e){for(let t of e)t.unregister()})),await l.db.collection("sw/").doc(localStorage.email).delete()},async querys({},e){switch(e.tipo){case"notificarmsg":await l.db.collection("users/").doc(e.user1+"/amigos/"+e.user2).update(e.details);break;case"solicitudes":await l.N$.ref("solicitudes/"+e.email+"/"+e.friend).set({null:""});break;case"chat":await l.N$.ref("chats/"+e.user1+"/"+e.user2).push(e.msg);break}},changeOtherId({state:e,commit:t},a){t("changeOtherId",a),l.db.collection("users/").doc(d+"/amigos/"+e.otherId).update({cant_msjs:0})},cambiar_foto_Perfil({commit:e,state:t},a){switch(e("updateItemPerfil",a),a.item){case"imagen":l.db.collection("users").doc(d).update({img:a.img});break;case"img_thumb":l.db.collection("users").doc(d).update({img_thumb:a.img_thumb});break}},cambiarNombre({commit:e,state:t},a){a.item="name",e("updateItemPerfil",a),l.db.collection("users").doc(d).update({name:a.name})},borrarFotoPerfil({commit:e,state:t},a){var s={item:"imagen"};s.img=t.noimg,e("updateItemPerfil",s),s.item="img_thumb",s.img_thumb=t.noimg,e("updateItemPerfil",s),l.db.collection("users").doc(d).update({img:t.noimg,img_thumb:t.noimg}),l.$k.child(a).delete()},async RecibeMessage({dispatch:e,state:t},a){let s,i;t.amigos[t.otherId].email;const o=t.amigos[t.otherId].pushToken;a.from="them",e("querys",{tipo:"chat",user1:t.otherId,user2:d,msg:a}),"text"==a.tipo?(i=a.text,s=atob(i)):"url"==a.tipo?(i="Te ha enviado un archivo",s="Archivo"):"foto"==a.tipo?(i="Te envio una Foto",s="Foto"):"gif"==a.tipo&&(i="Te envio un gif",s="Gif"),e("querys",{tipo:"notificarmsg",user1:d,user2:t.otherId,details:{ultChat:s,ultFech:a.hora}}),e("querys",{tipo:"notificarmsg",user2:d,user1:t.otherId,details:{ultChat:s,cant_msjs:1,ultFech:a.hora}}),l.N$.ref("notis/"+t.otherId).update({name:t.userDetails.name,ultNoti:i,id:d}),o&&fetch("https://fcm.googleapis.com/fcm/send",{method:"POST",headers:{Authorization:"key=AAAA5qGUL4s:APA91bFRBlViYfHqp67hnzF7Vyg-ltCa7XqwKhu3PyLWebVhfTRUGP-bm8lZBXrLqRM2tBXMZPivfcHX3Yd3uuupPAVGSzEVuMiUBie1cpfeBLjkVnO2ZCm-MBPz5Q9bsg7CgZicMM9d","Content-Type":"application/json"},body:JSON.stringify({to:o,notification:{title:t.userDetails.name,body:s,mutable_content:!0,sound:"Tri-tone",icon:t.userDetails.img,click_action:"https://asdf-3e590.web.app/#/users"}})})},SendMessage({dispatch:e,state:t},a){a.from="me",e("querys",{tipo:"chat",user1:d,user2:t.otherId,msg:a})},subirArchivo({dispatch:e},t){l.$k.child(t.ruta).put(t.file).on("state_changed",(e=>{}),(e=>{}),(()=>{l.$k.child(t.ruta).getDownloadURL().then((a=>{e("SendMessage",{tipo:t.tipo,text:a,hora:t.hora}),e("RecibeMessage",{tipo:t.tipo,text:a,hora:t.hora})})).catch()}))},async sendPhoto({dispatch:e,state:t},a){const s=await l.N$.ref("chats/"+d+"/"+t.otherId).push({tipo:a.tipo,hora:a.hora,from:"me"}).key;l.$k.child(a.ruta).put(a.file).on("state_changed",(e=>{}),(e=>{}),(()=>{l.$k.child(a.ruta).getDownloadURL().then((i=>{l.N$.ref("chats/"+d+"/"+t.otherId+"/"+s).update({text:i}),e("RecibeMessage",{tipo:a.tipo,text:i,hora:a.hora})})).catch()}))},StopGettingMessages({commit:e}){}},h=m,p={notis:e=>e.notis,messages:e=>e.mensajes,solicitudes:e=>e.solicitudes,amigos:e=>e.amigos,user:e=>e.userDetails},g=p,f={namespaced:!0,state:r,actions:h,mutations:c,getters:g},b={async querys({},e){switch(e.tipo){case"delete":await l.db.collection("users/").doc(e.user1+"/amigos/"+e.user2).delete();break;case"accept":await l.db.collection("users/").doc(e.user1+"/amigos/"+e.user2).set(e.msg);break}},async Solicitud({state:e},t){const a=t.item;let s=a+t.tipo;if(e.userDetails.email!=s){s=s.split(".")[0];const t=l.N$.ref("solicitudes/"+s+"/"+e.userDetails.userId);await t.once("value",(async t=>{e.exis=await t.val()})),e.exis?Push.create("Mensaje",{body:"La solicitud ya fue enviada",timeout:2500}):(t.update({estado:"enviada"}),Push.create("Tu solicitud fue enviada correctamente",{timeout:2500}))}else Push.create("No te puedes agregar a ti mismo",{timeout:2500})},Accept({dispatch:e,state:t},a){const s=a.amigo;e("querys",{tipo:"accept",user1:t.userDetails.userId,user2:s,msg:{cant_msjs:"N",ultChat:"",ultFech:""}}),e("querys",{tipo:"accept",user1:s,user2:t.userDetails.userId,msg:{cant_msjs:"N",ultChat:"",ultFech:""}}),e("Borrado",{key:s,option:"Acepto"})},async Borrado({state:e,commit:t},a){const{key:s,option:i}=a,o=l.lX.currentUser.email.split(".")[0],r="Rechazo"===i?"users/"+s:"solicitudes/"+o+"/"+s;await l.N$.ref("solicitudes/"+o+"/"+s).remove(),await l.N$.ref(r).off("value"),await t("clearSolicitud",s)},RemoveSolicitud({dispatch:e},t){const a=t.amigo;e("Borrado",{key:a,option:"Rechazo"})},clearMessages({commit:e,state:t}){e("clearMessages"),l.N$.ref("chats/"+t.userDetails.userId+"/"+t.otherId).remove()},clearFriend({commit:e,state:t,dispatch:a}){a("clearMessages"),a("querys",{tipo:"delete",user1:t.userDetails.userId,user2:t.otherId}),a("querys",{tipo:"delete",user2:t.userDetails.userId,user1:t.otherId}),l.N$.ref("users/"+t.otherId).off("value"),e("clearFriend",t.otherId),this.$router.push("/users")}},v=b,y={namespaced:!0,state:r,actions:v,mutations:c},w=(0,s.h)((function(){const e=(0,i.MT)({modules:{store:f,store_friends:y},strict:!1});return e}))}},t={};function a(s){var i=t[s];if(void 0!==i)return i.exports;var o=t[s]={id:s,loaded:!1,exports:{}};return e[s].call(o.exports,o,o.exports,a),o.loaded=!0,o.exports}a.m=e,(()=>{var e=[];a.O=(t,s,i,o)=>{if(!s){var r=1/0;for(d=0;d<e.length;d++){for(var[s,i,o]=e[d],n=!0,c=0;c<s.length;c++)(!1&o||r>=o)&&Object.keys(a.O).every((e=>a.O[e](s[c])))?s.splice(c--,1):(n=!1,o<r&&(r=o));if(n){e.splice(d--,1);var l=i();void 0!==l&&(t=l)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[s,i,o]}})(),(()=>{a.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return a.d(t,{a:t}),t}})(),(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;a.t=function(s,i){if(1&i&&(s=this(s)),8&i)return s;if("object"===typeof s&&s){if(4&i&&s.__esModule)return s;if(16&i&&"function"===typeof s.then)return s}var o=Object.create(null);a.r(o);var r={};e=e||[null,t({}),t([]),t(t)];for(var n=2&i&&s;"object"==typeof n&&!~e.indexOf(n);n=t(n))Object.getOwnPropertyNames(n).forEach((e=>r[e]=()=>s[e]));return r["default"]=()=>s,a.d(o,r),o}})(),(()=>{a.d=(e,t)=>{for(var s in t)a.o(t,s)&&!a.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}})(),(()=>{a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((t,s)=>(a.f[s](e,t),t)),[]))})(),(()=>{a.u=e=>"js/"+e+"."+{12:"b646683f",118:"fb6ae652",480:"f16a1ae9",550:"765c62d5",622:"164410a4",628:"ac2d8d47",659:"fa2ca1bc"}[e]+".js"})(),(()=>{a.miniCssF=e=>"css/"+({143:"app",736:"vendor"}[e]||e)+"."+{12:"efba4aad",143:"ba6c121c",480:"75e38043",550:"0445c110",622:"fc80b914",659:"dc615b0e",736:"6185b9fa"}[e]+".css"})(),(()=>{a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{a.hmd=e=>(e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e)})(),(()=>{a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="naxchatappv3:";a.l=(s,i,o,r)=>{if(e[s])e[s].push(i);else{var n,c;if(void 0!==o)for(var l=document.getElementsByTagName("script"),d=0;d<l.length;d++){var u=l[d];if(u.getAttribute("src")==s||u.getAttribute("data-webpack")==t+o){n=u;break}}n||(c=!0,n=document.createElement("script"),n.charset="utf-8",n.timeout=120,a.nc&&n.setAttribute("nonce",a.nc),n.setAttribute("data-webpack",t+o),n.src=s),e[s]=[i];var m=(t,a)=>{n.onerror=n.onload=null,clearTimeout(h);var i=e[s];if(delete e[s],n.parentNode&&n.parentNode.removeChild(n),i&&i.forEach((e=>e(a))),t)return t(a)},h=setTimeout(m.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=m.bind(null,n.onerror),n.onload=m.bind(null,n.onload),c&&document.head.appendChild(n)}}})(),(()=>{a.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{a.p=""})(),(()=>{var e=(e,t,a,s)=>{var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var o=o=>{if(i.onerror=i.onload=null,"load"===o.type)a();else{var r=o&&("load"===o.type?"missing":o.type),n=o&&o.target&&o.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=r,c.request=n,i.parentNode.removeChild(i),s(c)}};return i.onerror=i.onload=o,i.href=t,document.head.appendChild(i),i},t=(e,t)=>{for(var a=document.getElementsByTagName("link"),s=0;s<a.length;s++){var i=a[s],o=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(o===e||o===t))return i}var r=document.getElementsByTagName("style");for(s=0;s<r.length;s++){i=r[s],o=i.getAttribute("data-href");if(o===e||o===t)return i}},s=s=>new Promise(((i,o)=>{var r=a.miniCssF(s),n=a.p+r;if(t(r,n))return i();e(s,n,i,o)})),i={143:0};a.f.miniCss=(e,t)=>{var a={12:1,480:1,550:1,622:1,659:1};i[e]?t.push(i[e]):0!==i[e]&&a[e]&&t.push(i[e]=s(e).then((()=>{i[e]=0}),(t=>{throw delete i[e],t})))}})(),(()=>{var e={143:0};a.f.j=(t,s)=>{var i=a.o(e,t)?e[t]:void 0;if(0!==i)if(i)s.push(i[2]);else{var o=new Promise(((a,s)=>i=e[t]=[a,s]));s.push(i[2]=o);var r=a.p+a.u(t),n=new Error,c=s=>{if(a.o(e,t)&&(i=e[t],0!==i&&(e[t]=void 0),i)){var o=s&&("load"===s.type?"missing":s.type),r=s&&s.target&&s.target.src;n.message="Loading chunk "+t+" failed.\n("+o+": "+r+")",n.name="ChunkLoadError",n.type=o,n.request=r,i[1](n)}};a.l(r,c,"chunk-"+t,t)}},a.O.j=t=>0===e[t];var t=(t,s)=>{var i,o,[r,n,c]=s,l=0;if(r.some((t=>0!==e[t]))){for(i in n)a.o(n,i)&&(a.m[i]=n[i]);if(c)var d=c(a)}for(t&&t(s);l<r.length;l++)o=r[l],a.o(e,o)&&e[o]&&e[o][0](),e[r[l]]=0;return a.O(d)},s=self["webpackChunknaxchatappv3"]=self["webpackChunknaxchatappv3"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))})();var s=a.O(void 0,[736],(()=>a(9526)));s=a.O(s)})();