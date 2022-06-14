"use strict";(self["webpackChunknaxchatappv3"]=self["webpackChunknaxchatappv3"]||[]).push([[862],{141:(e,t,a)=>{a.d(t,{Z:()=>s});a(979),a(6105),a(2396),a(6101),a(71),a(7965),a(6016);let o="undefined"!==typeof Blob&&function(){try{return Boolean(new Blob)}catch(e){return!1}}(),i=o&&"undefined"!==typeof Uint8Array&&function(){try{return 100===new Blob([new Uint8Array(100)]).size}catch(e){return!1}}(),r="undefined"!==typeof HTMLCanvasElement&&HTMLCanvasElement.prototype.toBlob,n=r||"undefined"!==typeof Uint8Array&&"undefined"!==typeof ArrayBuffer&&"undefined"!==typeof atob,l="undefined"!==typeof FileReader||"undefined"!==typeof URL;class s{static resize(e,t,a){"function"===typeof t&&(a=t,t={width:640,height:480});t.width,t.height;if(!s.isSupported()||!e.type.match(/image.*/))return a(e,!1),!1;if(e.type.match(/image\/gif/))return a(e,!1),!1;let o=document.createElement("img");return o.onload=i=>{let n=o.width,l=o.height,c=!1;if(n>=l&&n>t.width?(l*=t.width/n,n=t.width,c=!0):l>t.height&&(n*=t.height/l,l=t.height,c=!0),!c)return void a(e,!1);let d=document.createElement("canvas");d.width=n,d.height=l;let u=d.getContext("2d");if(u.drawImage(o,0,0,n,l),r)d.toBlob((e=>{a(e,!0)}),e.type);else{let t=s._toBlob(d,e.type);a(t,!0)}},s._loadImage(o,e),!0}static _toBlob(e,t){let a,r=e.toDataURL(t),n=r.split(",");a=n[0].indexOf("base64")>=0?atob(n[1]):decodeURIComponent(n[1]);let l=new ArrayBuffer(a.length),s=new Uint8Array(l);for(let o=0;o<a.length;o+=1)s[o]=a.charCodeAt(o);let c=n[0].split(":")[1].split(";")[0],d=null;if(o)d=new Blob([i?s:l],{type:c});else{let e=new BlobBuilder;e.append(l),d=e.getBlob(c)}return d}static _loadImage(e,t,a){if("undefined"===typeof URL){let o=new FileReader;o.onload=function(t){e.src=t.target.result,a&&a()},o.readAsDataURL(t)}else e.src=URL.createObjectURL(t),a&&a()}static isSupported(){return"undefined"!==typeof HTMLCanvasElement&&n&&l}}},9843:(e,t,a)=>{a.d(t,{Z:()=>u});a(71);var o=a(3673);function i(e,t,a,i,r,n){const l=(0,o.up)("perfil",!0),s=(0,o.up)("preview"),c=(0,o.up)("q-page");return(0,o.wg)(),(0,o.j4)(c,{class:"full-width q-pa"},{default:(0,o.w5)((()=>[(0,o.Wm)(l,{user:e.user},null,8,["user"]),(0,o._)("input",{class:"hidden",filled:"",hint:"Native file",id:"subir",onChange:t[0]||(t[0]=(...e)=>n.changeFoto&&n.changeFoto(...e)),type:"file",accept:"image/*"},null,32),(0,o._)("input",{class:"hidden",filled:"",hint:"Native file",id:"subirC",onChange:t[1]||(t[1]=(...e)=>n.changeFoto&&n.changeFoto(...e)),type:"file",accept:"image/*",capture:"camera"},null,32),(0,o.Wm)(s,{user:e.user},null,8,["user"])])),_:1})}a(7965),a(6016);var r=a(3617),n=a(141);const l={computed:{...(0,r.Se)("store",["user"])},methods:{async changeFoto(e){var t=e.target.files[0];this.op=1,this.resizeTools(t,350),this.resizeTools(t,40)},resizeTools(e,t){n.Z.resize(e,{width:t,height:t},(function(e,a){var o=window.URL.createObjectURL(e);40==t?preview_min.src=o:preview.src=o}))}},components:{preview:a(7076).Z,perfil:a(5278).Z}};var s=a(4379),c=a(7518),d=a.n(c);l.render=i;const u=l;d()(l,"components",{QPage:s.Z})},7076:(e,t,a)=>{a.d(t,{Z:()=>b});var o=a(3673);const i={key:0},r=(0,o._)("img",{src:"quasar-logo.svg"},null,-1),n={key:1,style:{"text-align":"center"}},l=["src"],s=["src"];function c(e,t,a,c,d,u){const m=(0,o.up)("q-avatar"),p=(0,o.up)("q-circular-progress"),g=(0,o.up)("q-tab"),h=(0,o.up)("q-tabs"),f=(0,o.up)("q-item"),w=(0,o.up)("q-dialog");return(0,o.wg)(),(0,o.j4)(w,{modelValue:e.$store.state.store.changePre,"onUpdate:modelValue":t[4]||(t[4]=t=>e.$store.state.store.changePre=t),maximized:!0},{default:(0,o.w5)((()=>[(0,o.Wm)(f,{class:"",style:{"justify-content":"center","align-items":"center",background:"rgb(255,255,255,.94)"}},{default:(0,o.w5)((()=>[0!=d.value?((0,o.wg)(),(0,o.iD)("div",i,[(0,o.Wm)(p,{"show-value":"",class:"q-ma-md",value:d.value,size:"120px",color:"blue","track-color":"grey-9"},{default:(0,o.w5)((()=>[(0,o.Wm)(m,{size:"100px"},{default:(0,o.w5)((()=>[r])),_:1})])),_:1},8,["value"])])):((0,o.wg)(),(0,o.iD)("div",n,[(0,o._)("img",{id:"preview",style:{width:"100%","border-radius":"50%","max-height":"15em","max-width":"15em"},src:null!=a.user.img?a.user.img:d.noimg},null,8,l),(0,o.Wm)(h,{style:{height:"6.5em"}},{default:(0,o.w5)((()=>[(0,o.Wm)(g,{class:"text-primary",icon:"done",onClick:u.click_onUpload},null,8,["onClick"]),(0,o._)("img",{id:"preview_min",style:{width:"50px",height:"50px","border-radius":"50%"},src:null!=a.user.img_thumb?a.user.img_thumb:d.noimg},null,8,s),(0,o.Wm)(g,{class:"text-red",icon:"cancel",onClick:t[0]||(t[0]=t=>e.changePre(!1))})])),_:1}),(0,o.Wm)(h,{style:{height:"6.5em"}},{default:(0,o.w5)((()=>[(0,o.Wm)(g,{class:"text-blue","no-caps":"",icon:"photo_camera",label:"Camara",onClick:t[1]||(t[1]=e=>u.galeria(2))}),(0,o.Wm)(g,{class:"text-orange-8","no-caps":"",icon:"photo",label:"Galeria",onClick:t[2]||(t[2]=e=>u.galeria(1))}),a.user.img?((0,o.wg)(),(0,o.j4)(g,{key:0,class:"text-red","no-caps":"",icon:"delete",label:"Borrar",onClick:t[3]||(t[3]=e=>u.galeria(3))})):(0,o.kq)("",!0)])),_:1})]))])),_:1})])),_:1},8,["modelValue"])}var d=a(3617),u=(a(141),a(2490));const m={props:["user"],data(){return{noimg:"",imageData:null,ruta:"",value:0,preview:"",preview_min:""}},mounted(){this.noimg=this.$store.state.store.noimg},methods:{...(0,d.nv)("store",["cambiar_foto_Perfil","borrarFotoPerfil"]),...(0,d.OI)("store",["changePre"]),galeria(e){this.ruta="Perfiles/"+this.user.email,1==e?subir.click():2==e?subirC.click():3==e&&this.deleteFoto()},deleteFoto(){this.borrarFotoPerfil(this.ruta)},async click_onUpload(){this.preview=preview.src,this.preview_min=preview_min.src,await this.onUpload(1)},onUpload(e){let t;1==e?t=this.preview:(t=this.preview_min,this.ruta+="_thumb");const a=t=>{var a=function(e,t){var a=new XMLHttpRequest;a.open("GET",e),a.responseType="blob",a.addEventListener("load",(function(){t(a.response)})),a.send()};a(t,(t=>{u.$k.child(this.ruta).put(t).on("state_changed",(e=>{let t=e.bytesTransferred/e.totalBytes*50;this.value+=t}),(e=>{}),(()=>{u.$k.child(this.ruta).getDownloadURL().then((t=>{1==e?(this.cambiar_foto_Perfil({item:"imagen",img:t}),this.onUpload(2)):2==e&&(this.cambiar_foto_Perfil({item:"img_thumb",img_thumb:t}),this.value=0,this.changePre(!1))})).catch((e=>alert("Se ha producido un error, intente nuevamente")))}))}))};a(t)},captureImage(){function e(e){preview.src=e}function t(e){alert("Failed because: "+e)}navigator.camera.getPicture(e,t,{quality:100,destinationType:Camera.DestinationType.FILE_URI,targetHeight:350,targetWidth:350})}}};var p=a(5926),g=a(3414),h=a(6122),f=a(5096),w=a(2496),v=a(3269),y=a(7518),_=a.n(y);m.render=c;const b=m;_()(m,"components",{QDialog:p.Z,QItem:g.Z,QCircularProgress:h.Z,QAvatar:f.Z,QTabs:w.Z,QTab:v.Z})},5278:(e,t,a)=>{a.d(t,{Z:()=>D});var o=a(3673),i=a(2323),r=a(8880);const n={class:"row no-wrap"},l={class:"col text-h6"},s={class:"absolute-bottom text-center"},c={style:{"margin-top":"3em"},class:"margin"},d={key:0},u={class:"row"},m={class:"col-10 text-left"},p=(0,o._)("div",{class:"text-left text-caption text-primary",style:{"margin-bottom":"-10px","font-weight":"bold"}}," Nombre ",-1),g={key:1},h={class:"row"},f={class:"col-9 text-left"},w=(0,o._)("div",{class:"text-left text-caption text-grey-8",style:{margin:"-3px -5px -9px 0px"}}," Este es tu nombre publico. ",-1),v=(0,o.Uk)(" Correo de registro: "),y=(0,o._)("br",null,null,-1);function _(e,t,a,_,b,W){const Z=(0,o.up)("q-btn"),k=(0,o.up)("q-img"),x=(0,o.up)("q-input"),C=(0,o.up)("q-card-section"),q=(0,o.up)("q-card"),Q=(0,o.Q2)("ripple"),U=(0,o.Q2)("close-popup");return(0,o.wg)(),(0,o.j4)(q,{flat:"",style:{"margin-top":"2em"}},{default:(0,o.w5)((()=>[(0,o.Wm)(C,{class:"text-center"},{default:(0,o.w5)((()=>[(0,o._)("div",n,[(0,o._)("div",l,[(0,o.wy)((0,o.Wm)(k,{id:"fotoUser",src:null!=a.user.img?a.user.img:b.noimg,"native-context-menu":"","spinner-color":"primary",style:{height:"176px",width:"176px","margin-bottom":"0px","border-radius":"50%",cursor:"pointer"},onClick:t[0]||(t[0]=t=>e.changePre(!0))},{default:(0,o.w5)((()=>[(0,o._)("div",s,[(0,o.Wm)(Z,{round:"",color:"dark",icon:"photo_camera","text-color":"white"})])])),_:1},8,["src"]),[[Q]]),(0,o._)("div",c,[b.editar?((0,o.wg)(),(0,o.iD)("span",g,[(0,o._)("div",h,[(0,o._)("div",f,[(0,o.Wm)(x,{modelValue:b.name,"onUpdate:modelValue":t[2]||(t[2]=e=>b.name=e),label:"Nombre",color:"dark",dense:"",autofocus:"",onKeyup:t[3]||(t[3]=(0,r.D2)((e=>(W.saveEdit(),b.editar=!b.editar)),["enter"]))},null,8,["modelValue"])]),(0,o.wy)((0,o.Wm)(Z,{flat:"",dense:"",color:"primary",icon:"save",style:{"margin-top":"10px",padding:"0","font-size":".52em"},onClick:t[4]||(t[4]=e=>(W.saveEdit(),b.editar=!b.editar))},null,512),[[U]]),(0,o.wy)((0,o.Wm)(Z,{flat:"",dense:"",color:"red",icon:"cancel",onClick:t[5]||(t[5]=e=>b.editar=!b.editar),style:{"margin-top":"10px",padding:"0","font-size":".52em"}},null,512),[[U]])])])):((0,o.wg)(),(0,o.iD)("span",d,[(0,o._)("div",u,[(0,o._)("div",m,[p,(0,o.Uk)(" "+(0,i.zw)(a.user.name),1)]),(0,o.wy)((0,o.Wm)(Z,{flat:"",dense:"",color:"primary",onClick:t[1]||(t[1]=e=>(b.name=a.user.name,b.editar=!b.editar)),icon:"edit",style:{"margin-top":"10px",padding:"0","font-size":".6em"}},null,512),[[U]])])])),w])])])])),_:1}),(0,o.Wm)(C,{class:"margin"},{default:(0,o.w5)((()=>[v,y,(0,o.Wm)(k,{style:{width:"1.3em","margin-right":"5px"},src:"icons/gmail.jpg"}),(0,o.Uk)(" "+(0,i.zw)(a.user.email),1)])),_:1}),(0,o.Wm)(C,{style:{"margin-top":".5em"}},{default:(0,o.w5)((()=>[(0,o.Wm)(Z,{flat:"","no-caps":"",color:"dark",icon:"exit_to_app",label:"Cerrar la sesión",onClick:e.logoutUser},null,8,["onClick"])])),_:1}),(0,o.Wm)(C,{style:{"margin-top":".5em"}},{default:(0,o.w5)((()=>[e.$store.state.store.userDetails.pushToken?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(Z,{key:0,flat:"","no-caps":"",color:"blue-6",icon:"notifications",label:"Activar notificaciones push",onClick:e.ActivateNotificationPushs},null,8,["onClick"]))])),_:1})])),_:1})}var b=a(3617);const W={props:["user"],data(){return{noimg:"",editar:!1,name:""}},mounted(){this.noimg=this.$store.state.store.noimg},methods:{...(0,b.nv)("store",["cambiarNombre"]),...(0,b.nv)("store",["logoutUser","ActivateNotificationPushs"]),...(0,b.OI)("store",["changePre"]),saveEdit(){this.cambiarNombre({name:this.name})},notify(){this.$notification.show("Hello World",{body:"This is an example!"},{})}}};var Z=a(151),k=a(5589),x=a(4027),C=a(2165),q=a(6805),Q=a(6489),U=a(677),I=a(7518),P=a.n(I);W.render=_;const D=W;P()(W,"components",{QCard:Z.Z,QCardSection:k.Z,QImg:x.Z,QBtn:C.Z,QInput:q.Z}),P()(W,"directives",{Ripple:Q.Z,ClosePopup:U.Z})},3113:(e,t,a)=>{a.d(t,{Z:()=>v});var o=a(3673),i=a(8880);const r=(0,o._)("p",{class:"text-center"}," Para agregar a alguien agregalo con su correo con el que se registro. ",-1),n={class:"flex"};function l(e,t,a,l,s,c){const d=(0,o.up)("q-card-section"),u=(0,o.up)("q-input"),m=(0,o.up)("q-btn"),p=(0,o.up)("q-card-actions"),g=(0,o.up)("q-card"),h=(0,o.Q2)("close-popup");return(0,o.wg)(),(0,o.j4)(g,{style:{"min-width":"80%"}},{default:(0,o.w5)((()=>[(0,o.Wm)(d,null,{default:(0,o.w5)((()=>[r])),_:1}),(0,o.Wm)(d,{class:"q-pt-none"},{default:(0,o.w5)((()=>[(0,o._)("div",n,[(0,o.wy)((0,o.Wm)(u,{dense:"",modelValue:s.idamigo,"onUpdate:modelValue":t[0]||(t[0]=e=>s.idamigo=e),"no-caps":"",onkeyup:"javascript:this.value=this.value.toLowerCase();",onKeyup:t[1]||(t[1]=(0,i.D2)((t=>{e.Solicitud({item:s.idamigo,tipo:s.tipoItem}),s.idamigo=""}),["enter"])),label:"Inserte dirección de correo de amigo",style:{width:"67%"},autofocus:""},null,8,["modelValue"]),[[h]]),(0,o.Wm)(u,{"no-caps":"",dense:"",modelValue:s.tipoItem,"onUpdate:modelValue":t[2]||(t[2]=e=>s.tipoItem=e),style:{width:"33%"}},null,8,["modelValue"])])])),_:1}),(0,o.Wm)(p,{align:"right"},{default:(0,o.w5)((()=>[(0,o.wy)((0,o.Wm)(m,{color:"red",flat:"",label:"Cancel",onClick:t[3]||(t[3]=e=>s.idamigo="")},null,512),[[h]]),(0,o.wy)((0,o.Wm)(m,{color:"primary",flat:"",label:"Mandar Solicitud",onClick:t[4]||(t[4]=t=>{e.Solicitud({item:s.idamigo,tipo:s.tipoItem}),s.idamigo=""})},null,512),[[h]])])),_:1})])),_:1})}var s=a(3617);const c={data(){return{tipoItem:"@gmail.com",idamigo:""}},methods:{...(0,s.nv)("store_friends",["Solicitud"])}};var d=a(151),u=a(5589),m=a(6805),p=a(9367),g=a(2165),h=a(677),f=a(7518),w=a.n(f);c.render=l;const v=c;w()(c,"components",{QCard:d.Z,QCardSection:u.Z,QInput:m.Z,QCardActions:p.Z,QBtn:g.Z}),w()(c,"directives",{ClosePopup:h.Z})},951:(e,t,a)=>{a.d(t,{Z:()=>W});var o=a(3673),i=a(2323);const r={style:{"text-align":"right","margin-right":"0"}},n={class:"boton"};function l(e,t,a,l,s,c){const d=(0,o.up)("q-img"),u=(0,o.up)("q-avatar"),m=(0,o.up)("q-item-section"),p=(0,o.up)("q-item-label"),g=(0,o.up)("q-btn"),h=(0,o.up)("q-item"),f=(0,o.up)("q-separator"),w=(0,o.up)("q-list"),v=(0,o.up)("AddFriend"),y=(0,o.up)("q-dialog"),_=(0,o.up)("component-watch"),b=(0,o.up)("q-page");return(0,o.wg)(),(0,o.j4)(b,{style:{"margin-bottom":"100px"}},{default:(0,o.w5)((()=>[(0,o.Wm)(w,{class:"rounded-borders",style:{"max-width":"350px",margin:"auto"}},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.solicitudes,((t,a)=>((0,o.wg)(),(0,o.iD)("div",{key:a},[(0,o.Wm)(h,null,{default:(0,o.w5)((()=>[(0,o.Wm)(m,{avatar:"",onClick:t=>(e.changeOtherId(a),s.watch=!0)},{default:(0,o.w5)((()=>[(0,o.Wm)(u,null,{default:(0,o.w5)((()=>[(0,o.Wm)(d,{loading:"lazy",style:{background:"lightgrey"},src:t.img_thumb},null,8,["src"])])),_:2},1024)])),_:2},1032,["onClick"]),(0,o.Wm)(m,{class:"text-left"},{default:(0,o.w5)((()=>[(0,o.Wm)(p,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,i.zw)(t.name),1)])),_:2},1024)])),_:2},1024),(0,o._)("div",r,[(0,o.Wm)(g,{icon:"add",color:"green-8","no-caps":"",flat:"",dense:"",onClick:t=>e.Accept({amigo:a})},null,8,["onClick"]),(0,o.Wm)(g,{icon:"remove",color:"red","no-caps":"",flat:"",dense:"",onClick:t=>e.RemoveSolicitud({amigo:a})},null,8,["onClick"])])])),_:2},1024),(0,o.Wm)(f,{spaced:"",style:{background:"#fff"}})])))),128))])),_:1}),(0,o.Wm)(y,{modelValue:s.AddFriend,"onUpdate:modelValue":t[0]||(t[0]=e=>s.AddFriend=e),position:"bottom","transition-hide":"rotate"},{default:(0,o.w5)((()=>[(0,o.Wm)(v)])),_:1},8,["modelValue"]),(0,o._)("div",n,[(0,o.Wm)(g,{icon:"add",size:"1.1em",round:"",dense:"",glossy:"",color:"primary",onClick:t[1]||(t[1]=e=>s.AddFriend=!0)})]),(0,o.Wm)(y,{modelValue:s.watch,"onUpdate:modelValue":t[2]||(t[2]=e=>s.watch=e),class:"my-card"},{default:(0,o.w5)((()=>[(0,o.Wm)(_,{modo:"solicitudes"})])),_:1},8,["modelValue"])])),_:1})}var s=a(3617);const c={data(){return{amigoClick:{},watch:!1,AddFriend:!1}},computed:{...(0,s.Se)("store",["solicitudes"])},methods:{...(0,s.nv)("store_friends",["Accept","RemoveSolicitud"]),...(0,s.nv)("store",["changeOtherId"])},components:{AddFriend:a(3113).Z,"component-watch":a(4003).Z}};var d=a(4379),u=a(7011),m=a(3414),p=a(2035),g=a(5096),h=a(4027),f=a(2350),w=a(2165),v=a(5869),y=a(5926),_=a(7518),b=a.n(_);c.render=l;const W=c;b()(c,"components",{QPage:d.Z,QList:u.Z,QItem:m.Z,QItemSection:p.Z,QAvatar:g.Z,QImg:h.Z,QItemLabel:f.Z,QBtn:w.Z,QSeparator:v.Z,QDialog:y.Z})},2662:(e,t,a)=>{a.d(t,{Z:()=>g});var o=a(3673),i=a(2323);function r(e,t,a,r,n,l){const s=(0,o.up)("img_thumb"),c=(0,o.up)("q-item-section"),d=(0,o.up)("q-item-label"),u=(0,o.up)("q-item"),m=(0,o.up)("component-watch"),p=(0,o.up)("q-dialog");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(u,null,{default:(0,o.w5)((()=>[(0,o.Wm)(c,{avatar:"",onClick:t[0]||(t[0]=t=>{e.changeOtherId(a.userKey),e.watch=!0})},{default:(0,o.w5)((()=>[(0,o.Wm)(s,{img:a.user.img_thumb},null,8,["img"])])),_:1}),(0,o.Wm)(c,{onClick:t[1]||(t[1]=e=>l.go(a.userKey,a.user.email))},{default:(0,o.w5)((()=>[(0,o.Wm)(d,{class:"msj"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,i.zw)(a.user.name),1)])),_:1}),(0,o.Wm)(d,{lines:"2",class:"text-caption msj text-grey"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,i.zw)(a.user.ultMsj||"Esribe un mensaje.."),1)])),_:1})])),_:1}),(0,o.Wm)(c,{side:"",top:"",onClick:t[2]||(t[2]=e=>l.go(a.userKey,a.user.email))},{default:(0,o.w5)((()=>[(0,o.Wm)(d,{lines:"1",class:"text-caption text-grey"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,i.zw)(a.user.fecha),1)])),_:1}),(0,o.Wm)(d,{lines:"1",class:"text-caption text-grey"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,i.zw)(a.user.hora),1)])),_:1})])),_:1})])),_:1}),(0,o.Wm)(p,{modelValue:e.watch,"onUpdate:modelValue":t[3]||(t[3]=t=>e.watch=t),"transition-hide":"rotate"},{default:(0,o.w5)((()=>[(0,o.Wm)(m,{modo:"friends"})])),_:1},8,["modelValue"])],64)}var n=a(3617);const l={name:"User",props:["user","userKey"],data:()=>({watch:!1}),methods:{...(0,n.nv)("store",["changeOtherId"]),go(e,t){this.changeOtherId(e),this.$router.push("/chat/"+btoa(t))}},components:{img_thumb:a(8261).Z,"component-watch":a(4003).Z}};var s=a(3414),c=a(2035),d=a(2350),u=a(5926),m=a(7518),p=a.n(m);l.render=r;const g=l;p()(l,"components",{QItem:s.Z,QItemSection:c.Z,QItemLabel:d.Z,QDialog:u.Z})},1466:(e,t,a)=>{a.d(t,{Z:()=>m});var o=a(3673);function i(e,t,a,i,r,n){const l=(0,o.up)("User"),s=(0,o.up)("q-separator"),c=(0,o.up)("q-list"),d=(0,o.up)("q-page");return(0,o.wg)(),(0,o.j4)(d,{style:{"margin-bottom":"60px","padding-top":"6px"}},{default:(0,o.w5)((()=>[(0,o.Wm)(c,{class:"rounded-borders",style:{"max-width":"350px"}},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.amigos,((e,t)=>((0,o.wg)(),(0,o.iD)("div",{key:t},[(0,o.Wm)(l,{user:e,userKey:t},null,8,["user","userKey"]),(0,o.Wm)(s,{spaced:"",style:{background:"white"}})])))),128))])),_:1})])),_:1})}var r=a(3617);const n={computed:{...(0,r.Se)("store",["amigos"])},components:{User:a(2662).Z}};var l=a(4379),s=a(7011),c=a(5869),d=a(7518),u=a.n(d);n.render=i;const m=n;u()(n,"components",{QPage:l.Z,QList:s.Z,QSeparator:c.Z})},8261:(e,t,a)=>{a.d(t,{Z:()=>m});var o=a(3673);function i(e,t,a,i,r,n){const l=(0,o.up)("q-img"),s=(0,o.up)("q-avatar");return(0,o.wg)(),(0,o.j4)(s,null,{default:(0,o.w5)((()=>[(0,o.Wm)(l,{id:"img",src:a.img||e.$store.state.store.noimg,loading:"lazy",onError:i.replaceByDefault},null,8,["src","onError"])])),_:1})}var r=a(1959);const n={props:["img"],setup(){const e=(0,r.iH)(!1),t=()=>{e.value=!0};return{replaceByDefault(e){e.target.src="quasar-logo.svg"},loadimg:e,asdasd:t}}};var l=a(5096),s=a(4103),c=a(4027),d=a(7518),u=a.n(d);n.render=i;const m=n;u()(n,"components",{QAvatar:l.Z,QSkeleton:s.ZP,QImg:c.Z})},4003:(e,t,a)=>{a.d(t,{Z:()=>g});var o=a(3673),i=a(2323);const r={class:"col text-h6 ellipsis"};function n(e,t,a,n,l,s){const c=(0,o.up)("q-img"),d=(0,o.up)("q-card-section"),u=(0,o.up)("q-card"),m=(0,o.Q2)("close-popup");return(0,o.wg)(),(0,o.j4)(u,{style:(0,i.j5)(s.styleCard)},{default:(0,o.w5)((()=>[(0,o.wy)((0,o.Wm)(c,{style:(0,i.j5)(s.style),src:s.details.img,onError:s.replaceByDefault},null,8,["style","src","onError"]),[[m]]),(0,o.Wm)(d,null,{default:(0,o.w5)((()=>[(0,o._)("div",r,(0,i.zw)(s.details.name),1)])),_:1})])),_:1},8,["style"])}const l={props:["modo"],computed:{details(){let e="solicitudes"==this.modo?this.$store.state.store.solicitudes:this.$store.state.store.amigos;return{img:e[this.$store.state.store.otherId].img||this.$store.state.store.noimg,name:e[this.$store.state.store.otherId].name}},style(){return{height:.5*this.$q.screen.height+"px",width:.85*this.$q.screen.width+"px"}},styleCard(){return{height:.628*this.$q.screen.height+"px",width:.85*this.$q.screen.width+"px"}}},methods:{replaceByDefault(e){e.target.src="quasar-logo.svg"}}};var s=a(151),c=a(4027),d=a(5589),u=a(677),m=a(7518),p=a.n(m);l.render=n;const g=l;p()(l,"components",{QCard:s.Z,QImg:c.Z,QCardSection:d.Z}),p()(l,"directives",{ClosePopup:u.Z})},9862:(e,t,a)=>{a.r(t),a.d(t,{default:()=>w});var o=a(3673);const i={key:0},r=(0,o._)("div",{class:"loader"},null,-1),n=(0,o._)("span",{class:"absolute-center text-caption text-grey-3"},null,-1),l=[r,n];function s(e,t,a,r,n,s){const c=(0,o.up)("listaamigosL"),d=(0,o.up)("q-tab-panel"),u=(0,o.up)("listasolicitudes"),m=(0,o.up)("perfil"),p=(0,o.up)("q-tab-panels"),g=(0,o.up)("q-page");return e.$store.state.store.cargando?((0,o.wg)(),(0,o.iD)("div",i,l)):((0,o.wg)(),(0,o.j4)(g,{key:1},{default:(0,o.w5)((()=>[(0,o.Wm)(p,{modelValue:e.opcion,"onUpdate:modelValue":t[0]||(t[0]=t=>e.opcion=t)},{default:(0,o.w5)((()=>[(0,o.Wm)(d,{name:"amigos"},{default:(0,o.w5)((()=>[(0,o.Wm)(c)])),_:1}),(0,o.Wm)(d,{name:"solicitudes"},{default:(0,o.w5)((()=>[(0,o.Wm)(u)])),_:1}),(0,o.Wm)(d,{name:"perfil"},{default:(0,o.w5)((()=>[(0,o.Wm)(m)])),_:1})])),_:1},8,["modelValue"])])),_:1}))}var c=a(3617);const d={computed:{...(0,c.rn)("store",["opcion","userDetails"])},components:{listaamigosL:a(1466).Z,listasolicitudes:a(951).Z,perfil:a(9843).Z}};var u=a(4379),m=a(5906),p=a(6602),g=a(2496),h=a(7518),f=a.n(h);d.render=s;const w=d;f()(d,"components",{QPage:u.Z,QTabPanels:m.Z,QTabPanel:p.Z,QTabs:g.Z})}}]);