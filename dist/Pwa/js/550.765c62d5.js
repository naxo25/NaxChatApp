"use strict";(self["webpackChunknaxchatappv3"]=self["webpackChunknaxchatappv3"]||[]).push([[550],{141:(e,t,a)=>{a.d(t,{Z:()=>s});a(979),a(6105),a(2396),a(6101),a(71),a(7965),a(6016);let i="undefined"!==typeof Blob&&function(){try{return Boolean(new Blob)}catch(e){return!1}}(),o=i&&"undefined"!==typeof Uint8Array&&function(){try{return 100===new Blob([new Uint8Array(100)]).size}catch(e){return!1}}(),n="undefined"!==typeof HTMLCanvasElement&&HTMLCanvasElement.prototype.toBlob,l=n||"undefined"!==typeof Uint8Array&&"undefined"!==typeof ArrayBuffer&&"undefined"!==typeof atob,r="undefined"!==typeof FileReader||"undefined"!==typeof URL;class s{static resize(e,t,a){"function"===typeof t&&(a=t,t={width:640,height:480});t.width,t.height;if(!s.isSupported()||!e.type.match(/image.*/))return a(e,!1),!1;if(e.type.match(/image\/gif/))return a(e,!1),!1;let i=document.createElement("img");return i.onload=o=>{let l=i.width,r=i.height,m=!1;if(l>=r&&l>t.width?(r*=t.width/l,l=t.width,m=!0):r>t.height&&(l*=t.height/r,r=t.height,m=!0),!m)return void a(e,!1);let c=document.createElement("canvas");c.width=l,c.height=r;let d=c.getContext("2d");if(d.drawImage(i,0,0,l,r),n)c.toBlob((e=>{a(e,!0)}),e.type);else{let t=s._toBlob(c,e.type);a(t,!0)}},s._loadImage(i,e),!0}static _toBlob(e,t){let a,n=e.toDataURL(t),l=n.split(",");a=l[0].indexOf("base64")>=0?atob(l[1]):decodeURIComponent(l[1]);let r=new ArrayBuffer(a.length),s=new Uint8Array(r);for(let i=0;i<a.length;i+=1)s[i]=a.charCodeAt(i);let m=l[0].split(":")[1].split(";")[0],c=null;if(i)c=new Blob([o?s:r],{type:m});else{let e=new BlobBuilder;e.append(r),c=e.getBlob(m)}return c}static _loadImage(e,t,a){if("undefined"===typeof URL){let i=new FileReader;i.onload=function(t){e.src=t.target.result,a&&a()},i.readAsDataURL(t)}else e.src=URL.createObjectURL(t),a&&a()}static isSupported(){return"undefined"!==typeof HTMLCanvasElement&&l&&r}}},9843:(e,t,a)=>{a.d(t,{Z:()=>d});a(71);var i=a(3673);function o(e,t,a,o,n,l){const r=(0,i.up)("perfil",!0),s=(0,i.up)("preview"),m=(0,i.up)("q-page");return(0,i.wg)(),(0,i.j4)(m,{class:"full-width q-pa"},{default:(0,i.w5)((()=>[(0,i.Wm)(r,{user:e.user},null,8,["user"]),(0,i._)("input",{class:"hidden",filled:"",hint:"Native file",id:"subir",onChange:t[0]||(t[0]=(...e)=>l.changeFoto&&l.changeFoto(...e)),type:"file",accept:"image/*"},null,32),(0,i._)("input",{class:"hidden",filled:"",hint:"Native file",id:"subirC",onChange:t[1]||(t[1]=(...e)=>l.changeFoto&&l.changeFoto(...e)),type:"file",accept:"image/*",capture:"camera"},null,32),(0,i.Wm)(s,{user:e.user},null,8,["user"])])),_:1})}a(7965),a(6016);var n=a(3617),l=a(141);const r={computed:{...(0,n.Se)("store",["user"])},methods:{async changeFoto(e){var t=e.target.files[0];this.op=1,this.resizeTools(t,350),this.resizeTools(t,40)},resizeTools(e,t){l.Z.resize(e,{width:t,height:t},(function(e,a){var i=window.URL.createObjectURL(e);40==t?preview_min.src=i:preview.src=i}))}},components:{preview:a(7076).Z,perfil:a(7765).Z}};var s=a(4379),m=a(7518),c=a.n(m);r.render=o;const d=r;c()(r,"components",{QPage:s.Z})},7076:(e,t,a)=>{a.d(t,{Z:()=>b});var i=a(3673);const o={key:0},n=(0,i._)("img",{src:"quasar-logo.svg"},null,-1),l={key:1,style:{"text-align":"center"}},r=["src"],s=["src"];function m(e,t,a,m,c,d){const u=(0,i.up)("q-avatar"),p=(0,i.up)("q-circular-progress"),g=(0,i.up)("q-tab"),h=(0,i.up)("q-tabs"),w=(0,i.up)("q-item"),f=(0,i.up)("q-dialog");return(0,i.wg)(),(0,i.j4)(f,{modelValue:e.$store.state.store.changePre,"onUpdate:modelValue":t[4]||(t[4]=t=>e.$store.state.store.changePre=t),maximized:!0},{default:(0,i.w5)((()=>[(0,i.Wm)(w,{class:"",style:{"justify-content":"center","align-items":"center",background:"rgb(255,255,255,.94)"}},{default:(0,i.w5)((()=>[0!=c.value?((0,i.wg)(),(0,i.iD)("div",o,[(0,i.Wm)(p,{"show-value":"",class:"q-ma-md",value:c.value,size:"120px",color:"blue","track-color":"grey-9"},{default:(0,i.w5)((()=>[(0,i.Wm)(u,{size:"100px"},{default:(0,i.w5)((()=>[n])),_:1})])),_:1},8,["value"])])):((0,i.wg)(),(0,i.iD)("div",l,[(0,i._)("img",{id:"preview",style:{width:"100%","border-radius":"50%","max-height":"15em","max-width":"15em"},src:null!=a.user.img?a.user.img:c.noimg},null,8,r),(0,i.Wm)(h,{style:{height:"6.5em"}},{default:(0,i.w5)((()=>[(0,i.Wm)(g,{class:"text-primary",icon:"done",onClick:d.click_onUpload},null,8,["onClick"]),(0,i._)("img",{id:"preview_min",style:{width:"50px",height:"50px","border-radius":"50%"},src:null!=a.user.img_thumb?a.user.img_thumb:c.noimg},null,8,s),(0,i.Wm)(g,{class:"text-red",icon:"cancel",onClick:t[0]||(t[0]=t=>e.changePre(!1))})])),_:1}),(0,i.Wm)(h,{style:{height:"6.5em"}},{default:(0,i.w5)((()=>[(0,i.Wm)(g,{class:"text-blue","no-caps":"",icon:"photo_camera",label:"Camara",onClick:t[1]||(t[1]=e=>d.galeria(2))}),(0,i.Wm)(g,{class:"text-orange-8","no-caps":"",icon:"photo",label:"Galeria",onClick:t[2]||(t[2]=e=>d.galeria(1))}),a.user.img?((0,i.wg)(),(0,i.j4)(g,{key:0,class:"text-red","no-caps":"",icon:"delete",label:"Borrar",onClick:t[3]||(t[3]=e=>d.galeria(3))})):(0,i.kq)("",!0)])),_:1})]))])),_:1})])),_:1},8,["modelValue"])}var c=a(3617),d=(a(141),a(2490));const u={props:["user"],data(){return{noimg:"",imageData:null,ruta:"",value:0,preview:"",preview_min:""}},mounted(){this.noimg=this.$store.state.store.noimg},methods:{...(0,c.nv)("store",["cambiar_foto_Perfil","borrarFotoPerfil"]),...(0,c.OI)("store",["changePre"]),galeria(e){this.ruta="Perfiles/"+this.user.email,1==e?subir.click():2==e?subirC.click():3==e&&this.deleteFoto()},deleteFoto(){this.borrarFotoPerfil(this.ruta)},async click_onUpload(){this.preview=preview.src,this.preview_min=preview_min.src,await this.onUpload(1)},onUpload(e){let t;1==e?t=this.preview:(t=this.preview_min,this.ruta+="_thumb");const a=t=>{var a=function(e,t){var a=new XMLHttpRequest;a.open("GET",e),a.responseType="blob",a.addEventListener("load",(function(){t(a.response)})),a.send()};a(t,(t=>{d.$k.child(this.ruta).put(t).on("state_changed",(e=>{let t=e.bytesTransferred/e.totalBytes*50;this.value+=t}),(e=>{}),(()=>{d.$k.child(this.ruta).getDownloadURL().then((t=>{1==e?(this.cambiar_foto_Perfil({item:"imagen",img:t}),this.onUpload(2)):2==e&&(this.cambiar_foto_Perfil({item:"img_thumb",img_thumb:t}),this.value=0,this.changePre(!1))})).catch((e=>alert("Se ha producido un error, intente nuevamente")))}))}))};a(t)},captureImage(){function e(e){preview.src=e}function t(e){alert("Failed because: "+e)}navigator.camera.getPicture(e,t,{quality:100,destinationType:Camera.DestinationType.FILE_URI,targetHeight:350,targetWidth:350})}}};var p=a(5926),g=a(3414),h=a(6122),w=a(5096),f=a(2496),_=a(3269),y=a(7518),v=a.n(y);u.render=m;const b=u;v()(u,"components",{QDialog:p.Z,QItem:g.Z,QCircularProgress:h.Z,QAvatar:w.Z,QTabs:f.Z,QTab:_.Z})},7765:(e,t,a)=>{a.d(t,{Z:()=>z});var i=a(3673),o=a(2323),n=a(8880);const l={class:"row no-wrap"},r={class:"col text-h6"},s={class:"absolute-bottom text-center"},m={style:{"margin-top":"3em"},class:"margin"},c={key:0},d={class:"row"},u={class:"col-10 text-left"},p=(0,i._)("div",{class:"text-left text-caption text-primary",style:{"margin-bottom":"-10px","font-weight":"bold"}}," Nombre ",-1),g={key:1},h={class:"row"},w={class:"col-9 text-left"},f=(0,i._)("div",{class:"text-left text-caption text-grey-8",style:{margin:"-3px -5px -9px 0px"}}," Este es tu nombre publico. ",-1),_=(0,i.Uk)(" Correo de registro: "),y=(0,i._)("br",null,null,-1);function v(e,t,a,v,b,W){const x=(0,i.up)("q-btn"),Z=(0,i.up)("q-img"),k=(0,i.up)("q-input"),q=(0,i.up)("q-card-section"),C=(0,i.up)("q-card"),Q=(0,i.Q2)("ripple"),I=(0,i.Q2)("close-popup");return(0,i.wg)(),(0,i.j4)(C,{flat:"",style:{"margin-top":"2em"}},{default:(0,i.w5)((()=>[(0,i.Wm)(q,{class:"text-center"},{default:(0,i.w5)((()=>[(0,i._)("div",l,[(0,i._)("div",r,[(0,i.wy)((0,i.Wm)(Z,{id:"fotoUser",src:null!=a.user.img?a.user.img:b.noimg,"native-context-menu":"","spinner-color":"primary",style:{height:"176px",width:"176px","margin-bottom":"0px","border-radius":"50%",cursor:"pointer"},onClick:t[0]||(t[0]=t=>e.changePre(!0))},{default:(0,i.w5)((()=>[(0,i._)("div",s,[(0,i.Wm)(x,{round:"",color:"dark",icon:"photo_camera","text-color":"white"})])])),_:1},8,["src"]),[[Q]]),(0,i._)("div",m,[b.editar?((0,i.wg)(),(0,i.iD)("span",g,[(0,i._)("div",h,[(0,i._)("div",w,[(0,i.Wm)(k,{modelValue:b.name,"onUpdate:modelValue":t[2]||(t[2]=e=>b.name=e),label:"Nombre",color:"dark",dense:"",autofocus:"",onKeyup:t[3]||(t[3]=(0,n.D2)((e=>(W.saveEdit(),b.editar=!b.editar)),["enter"]))},null,8,["modelValue"])]),(0,i.wy)((0,i.Wm)(x,{flat:"",dense:"",color:"primary",icon:"save",style:{"margin-top":"10px",padding:"0","font-size":".52em"},onClick:t[4]||(t[4]=e=>(W.saveEdit(),b.editar=!b.editar))},null,512),[[I]]),(0,i.wy)((0,i.Wm)(x,{flat:"",dense:"",color:"red",icon:"cancel",onClick:t[5]||(t[5]=e=>b.editar=!b.editar),style:{"margin-top":"10px",padding:"0","font-size":".52em"}},null,512),[[I]])])])):((0,i.wg)(),(0,i.iD)("span",c,[(0,i._)("div",d,[(0,i._)("div",u,[p,(0,i.Uk)(" "+(0,o.zw)(a.user.name),1)]),(0,i.wy)((0,i.Wm)(x,{flat:"",dense:"",color:"primary",onClick:t[1]||(t[1]=e=>(b.name=a.user.name,b.editar=!b.editar)),icon:"edit",style:{"margin-top":"10px",padding:"0","font-size":".6em"}},null,512),[[I]])])])),f])])])])),_:1}),(0,i.Wm)(q,{class:"margin"},{default:(0,i.w5)((()=>[_,y,(0,i.Wm)(Z,{style:{width:"1.3em","margin-right":"5px"},src:"gmail.png"}),(0,i.Uk)(" "+(0,o.zw)(a.user.email),1)])),_:1}),(0,i.Wm)(q,{style:{"margin-top":".5em"}},{default:(0,i.w5)((()=>[(0,i.Wm)(x,{flat:"","no-caps":"",color:"dark",icon:"exit_to_app",label:"Cerrar la sesión",onClick:e.logoutUser},null,8,["onClick"])])),_:1})])),_:1})}var b=a(3617);const W={props:["user"],data(){return{noimg:"",editar:!1,name:""}},mounted(){this.noimg=this.$store.state.store.noimg},methods:{...(0,b.nv)("store",["cambiarNombre"]),...(0,b.nv)("store",["logoutUser"]),...(0,b.OI)("store",["changePre"]),saveEdit(){this.cambiarNombre({name:this.name})},notify(){this.$notification.show("Hello World",{body:"This is an example!"},{})}}};var x=a(151),Z=a(5589),k=a(4027),q=a(2165),C=a(6805),Q=a(6489),I=a(677),j=a(7518),U=a.n(j);W.render=v;const z=W;U()(W,"components",{QCard:x.Z,QCardSection:Z.Z,QImg:k.Z,QBtn:q.Z,QInput:C.Z}),U()(W,"directives",{Ripple:Q.Z,ClosePopup:I.Z})},3113:(e,t,a)=>{a.d(t,{Z:()=>_});var i=a(3673),o=a(8880);const n=(0,i._)("p",{class:"text-center"}," Para agregar a alguien agregalo con su correo con el que se registro. ",-1),l={class:"flex"};function r(e,t,a,r,s,m){const c=(0,i.up)("q-card-section"),d=(0,i.up)("q-input"),u=(0,i.up)("q-btn"),p=(0,i.up)("q-card-actions"),g=(0,i.up)("q-card"),h=(0,i.Q2)("close-popup");return(0,i.wg)(),(0,i.j4)(g,{style:{"min-width":"80%"}},{default:(0,i.w5)((()=>[(0,i.Wm)(c,null,{default:(0,i.w5)((()=>[n])),_:1}),(0,i.Wm)(c,{class:"q-pt-none"},{default:(0,i.w5)((()=>[(0,i._)("div",l,[(0,i.wy)((0,i.Wm)(d,{dense:"",modelValue:s.idamigo,"onUpdate:modelValue":t[0]||(t[0]=e=>s.idamigo=e),"no-caps":"",onkeyup:"javascript:this.value=this.value.toLowerCase();",onKeyup:t[1]||(t[1]=(0,o.D2)((t=>{e.Solicitud({item:s.idamigo,tipo:s.tipoItem}),s.idamigo=""}),["enter"])),label:"Inserte dirección de correo de amigo",style:{width:"67%"},autofocus:""},null,8,["modelValue"]),[[h]]),(0,i.Wm)(d,{"no-caps":"",dense:"",modelValue:s.tipoItem,"onUpdate:modelValue":t[2]||(t[2]=e=>s.tipoItem=e),style:{width:"33%"}},null,8,["modelValue"])])])),_:1}),(0,i.Wm)(p,{align:"right"},{default:(0,i.w5)((()=>[(0,i.wy)((0,i.Wm)(u,{color:"red",flat:"",label:"Cancel",onClick:t[3]||(t[3]=e=>s.idamigo="")},null,512),[[h]]),(0,i.wy)((0,i.Wm)(u,{color:"primary",flat:"",label:"Mandar Solicitud",onClick:t[4]||(t[4]=t=>{e.Solicitud({item:s.idamigo,tipo:s.tipoItem}),s.idamigo=""})},null,512),[[h]])])),_:1})])),_:1})}var s=a(3617);const m={data(){return{tipoItem:"@gmail.com",idamigo:""}},methods:{...(0,s.nv)("store_friends",["Solicitud"])}};var c=a(151),d=a(5589),u=a(6805),p=a(9367),g=a(2165),h=a(677),w=a(7518),f=a.n(w);m.render=r;const _=m;f()(m,"components",{QCard:c.Z,QCardSection:d.Z,QInput:u.Z,QCardActions:p.Z,QBtn:g.Z}),f()(m,"directives",{ClosePopup:h.Z})},3164:(e,t,a)=>{a.d(t,{Z:()=>W});var i=a(3673),o=a(2323);const n={style:{"text-align":"right","margin-right":"0"}},l={class:"boton"};function r(e,t,a,r,s,m){const c=(0,i.up)("q-img"),d=(0,i.up)("q-avatar"),u=(0,i.up)("q-item-section"),p=(0,i.up)("q-item-label"),g=(0,i.up)("q-btn"),h=(0,i.up)("q-item"),w=(0,i.up)("q-separator"),f=(0,i.up)("q-list"),_=(0,i.up)("AddFriend"),y=(0,i.up)("q-dialog"),v=(0,i.up)("component-watch"),b=(0,i.up)("q-page");return(0,i.wg)(),(0,i.j4)(b,{style:{"margin-bottom":"100px"}},{default:(0,i.w5)((()=>[(0,i.Wm)(f,{class:"rounded-borders",style:{"max-width":"350px",margin:"auto"}},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.solicitudes,((t,a)=>((0,i.wg)(),(0,i.iD)("div",{key:a},[(0,i.Wm)(h,null,{default:(0,i.w5)((()=>[(0,i.Wm)(u,{avatar:"",onClick:t=>(e.changeOtherId(a),s.watch=!0)},{default:(0,i.w5)((()=>[(0,i.Wm)(d,null,{default:(0,i.w5)((()=>[(0,i.Wm)(c,{loading:"lazy",style:{background:"lightgrey"},src:t.img_thumb},null,8,["src"])])),_:2},1024)])),_:2},1032,["onClick"]),(0,i.Wm)(u,{class:"text-left"},{default:(0,i.w5)((()=>[(0,i.Wm)(p,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,o.zw)(t.name),1)])),_:2},1024)])),_:2},1024),(0,i._)("div",n,[(0,i.Wm)(g,{icon:"add",color:"green-8","no-caps":"",flat:"",dense:"",onClick:t=>e.Accept({amigo:a})},null,8,["onClick"]),(0,i.Wm)(g,{icon:"remove",color:"red","no-caps":"",flat:"",dense:"",onClick:t=>e.RemoveSolicitud({amigo:a})},null,8,["onClick"])])])),_:2},1024),(0,i.Wm)(w,{inset:"item",spaced:""})])))),128))])),_:1}),(0,i.Wm)(y,{modelValue:s.AddFriend,"onUpdate:modelValue":t[0]||(t[0]=e=>s.AddFriend=e),position:"bottom"},{default:(0,i.w5)((()=>[(0,i.Wm)(_)])),_:1},8,["modelValue"]),(0,i._)("div",l,[(0,i.Wm)(g,{icon:"add",size:"1.1em",round:"",dense:"",glossy:"",color:"primary",onClick:t[1]||(t[1]=e=>s.AddFriend=!0)})]),(0,i.Wm)(y,{modelValue:s.watch,"onUpdate:modelValue":t[2]||(t[2]=e=>s.watch=e),class:"my-card"},{default:(0,i.w5)((()=>[(0,i.Wm)(v,{modo:"solicitudes"})])),_:1},8,["modelValue"])])),_:1})}var s=a(3617);const m={data(){return{amigoClick:{},watch:!1,AddFriend:!1}},computed:{...(0,s.Se)("store",["solicitudes"])},methods:{...(0,s.nv)("store_friends",["Accept","RemoveSolicitud"]),...(0,s.nv)("store",["changeOtherId"])},components:{AddFriend:a(3113).Z,"component-watch":a(2610).Z}};var c=a(4379),d=a(7011),u=a(3414),p=a(2035),g=a(5096),h=a(4027),w=a(2350),f=a(2165),_=a(5869),y=a(5926),v=a(7518),b=a.n(v);m.render=r;const W=m;b()(m,"components",{QPage:c.Z,QList:d.Z,QItem:u.Z,QItemSection:p.Z,QAvatar:g.Z,QImg:h.Z,QItemLabel:w.Z,QBtn:f.Z,QSeparator:_.Z,QDialog:y.Z})},4345:(e,t,a)=>{a.d(t,{Z:()=>p});var i=a(3673);function o(e,t){const a=(0,i.up)("q-skeleton"),o=(0,i.up)("q-avatar"),n=(0,i.up)("q-item-section"),l=(0,i.up)("q-item-label"),r=(0,i.up)("q-item");return(0,i.wg)(),(0,i.j4)(r,{style:{"max-width":"420px","z-index":"0"},class:"full-width"},{default:(0,i.w5)((()=>[(0,i.Wm)(n,{avatar:""},{default:(0,i.w5)((()=>[(0,i.Wm)(o,null,{default:(0,i.w5)((()=>[(0,i.Wm)(a,{style:{size:"3em"},type:"QAvatar"})])),_:1})])),_:1}),(0,i.Wm)(n,{class:"text-left"},{default:(0,i.w5)((()=>[(0,i.Wm)(l,null,{default:(0,i.w5)((()=>[(0,i.Wm)(a,{type:"text"})])),_:1}),(0,i.Wm)(l,{caption:""},{default:(0,i.w5)((()=>[(0,i.Wm)(a,{type:"text",width:"65%"})])),_:1})])),_:1})])),_:1})}var n=a(3414),l=a(2035),r=a(5096),s=a(4103),m=a(2350),c=a(7518),d=a.n(c);const u={};u.render=o;const p=u;d()(u,"components",{QItem:n.Z,QItemSection:l.Z,QAvatar:r.Z,QSkeleton:s.ZP,QItemLabel:m.Z})},931:(e,t,a)=>{a.d(t,{Z:()=>_});var i=a(3673),o=a(2323);const n=(0,i._)("hr",{role:"separator","aria-orientation":"horizontal",class:"q-separator q-separator q-separator--horizontal q-separator--horizontal-inset",style:{"margin-bottom":"5px","margin-top":"5px",background:"#fff"}},null,-1);function l(e,t,a,l,r,s){const m=(0,i.up)("img_thumb"),c=(0,i.up)("q-item-section"),d=(0,i.up)("q-item-label"),u=(0,i.up)("q-item"),p=(0,i.up)("Skeleton"),g=(0,i.up)("q-list"),h=(0,i.up)("component-watch"),w=(0,i.up)("q-dialog"),f=(0,i.up)("q-page");return(0,i.wg)(),(0,i.j4)(f,{style:{"margin-bottom":"60px"}},{default:(0,i.w5)((()=>[(0,i.Wm)(g,{class:"rounded-borders",style:{"max-width":"350px",margin:"auto"}},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(s.limit,((t,a)=>((0,i.wg)(),(0,i.iD)("div",{key:a},[e.$store.state.store.loadings?((0,i.wg)(),(0,i.j4)(u,{key:1},{default:(0,i.w5)((()=>[(0,i.Wm)(p)])),_:1})):((0,i.wg)(),(0,i.j4)(u,{key:0},{default:(0,i.w5)((()=>[(0,i.Wm)(c,{avatar:"",onClick:t=>{e.changeOtherId(a),r.watch=!0}},{default:(0,i.w5)((()=>[(0,i.Wm)(m,{img:t.img_thumb},null,8,["img"])])),_:2},1032,["onClick"]),(0,i.Wm)(c,{onClick:e=>s.go(a)},{default:(0,i.w5)((()=>[(0,i.Wm)(d,{class:"msj"},{default:(0,i.w5)((()=>[(0,i.Uk)((0,o.zw)(t.name),1)])),_:2},1024),(0,i.Wm)(d,{caption:"",lines:"2"},{default:(0,i.w5)((()=>[(0,i._)("span",{lines:"1",class:"text-caption msj",style:(0,o.j5)(t.cant_msjs?"color: green":"color: #1D1D1D")},(0,o.zw)(t.ultChat),5)])),_:2},1024)])),_:2},1032,["onClick"]),(0,i.Wm)(c,{side:"",top:"",onClick:e=>s.go(a)},{default:(0,i.w5)((()=>[(0,i.Wm)(d,{lines:"1",class:"text-caption text-grey"},{default:(0,i.w5)((()=>[(0,i.Uk)((0,o.zw)(t.fecha),1)])),_:2},1024),(0,i.Wm)(d,{lines:"1",class:"text-caption text-grey"},{default:(0,i.w5)((()=>[(0,i.Uk)((0,o.zw)(t.hora),1)])),_:2},1024)])),_:2},1032,["onClick"])])),_:2},1024)),n])))),128))])),_:1}),(0,i.Wm)(w,{modelValue:r.watch,"onUpdate:modelValue":t[0]||(t[0]=e=>r.watch=e),class:"my-card"},{default:(0,i.w5)((()=>[(0,i.Wm)(h,{modo:"friends"})])),_:1},8,["modelValue"])])),_:1})}var r=a(3617);const s={data(){return{amigoClick:{},watch:!1,cant_limit:"",limite:{}}},computed:{...(0,r.Se)("store",["amigos"]),limit(){let e={};if(2!=this.$store.state.store.desarrollo)Object.keys(this.amigos).slice(0,this.cant_limit).forEach((t=>{this.amigos[t]&&(e[t]=this.amigos[t])}));else if(2==this.$store.state.store.desarrollo){let t=this.$store.state.store.noimg;e={"60teQqCd5dOD6b8wfgVBKA2en2O2":{name:"claudia",img_thumb:t,img:t},1:{name:"Ej",img_thumb:t,img:t},2:{name:"Ej",img_thumb:t,img:t},3:{name:"Ej",img_thumb:t,img:t},4:{name:"Ej",img_thumb:t,img:t},5:{name:"Ej",img_thumb:t,img:t},6:{name:"Ej",img_thumb:t,img:t},7:{name:"Ej",img_thumb:t,img:t},8:{name:"Ej",img_thumb:t,img:t},9:{name:"Ej",img_thumb:t,img:t},10:{name:"Ej",img_thumb:t,img:t},11:{name:"Ej",img_thumb:t,img:t},12:{name:"Ej",img_thumb:t,img:t},13:{name:"Ej",img_thumb:t,img:t},14:{name:"Ej",img_thumb:t,img:t}}}return e}},mounted(){let e=this.$q.screen.height;this.cant_limit=Math.floor(e/100+e/500);let t=document.scrollingElement||document.body;window.onscroll=()=>{this.$q.screen.height>=t.scrollHeight-window.scrollY-200&&(this.cant_limit+=5)}},methods:{...(0,r.nv)("store",["changeOtherId"]),go(e){this.changeOtherId(e),this.$router.push("/chat")}},components:{"component-watch":a(2610).Z,Skeleton:a(4345).Z,img_thumb:a(2472).Z}};var m=a(4379),c=a(7011),d=a(3414),u=a(2035),p=a(2350),g=a(5869),h=a(5926),w=a(7518),f=a.n(w);s.render=l;const _=s;f()(s,"components",{QPage:m.Z,QList:c.Z,QItem:d.Z,QItemSection:u.Z,QItemLabel:p.Z,QSeparator:g.Z,QDialog:h.Z})},2472:(e,t,a)=>{a.d(t,{Z:()=>c});var i=a(3673);function o(e,t,a,o,n,l){const r=(0,i.up)("q-img"),s=(0,i.up)("q-avatar");return(0,i.wg)(),(0,i.j4)(s,{style:{"margin-top":"5px"}},{default:(0,i.w5)((()=>[(0,i.Wm)(r,{loading:"lazy",src:a.img,style:{size:"3em"}},null,8,["src"])])),_:1})}const n={props:["img"]};var l=a(5096),r=a(4027),s=a(7518),m=a.n(s);n.render=o;const c=n;m()(n,"components",{QAvatar:l.Z,QImg:r.Z})},2610:(e,t,a)=>{a.d(t,{Z:()=>g});var i=a(3673),o=a(2323);const n={class:"col text-h6 ellipsis"};function l(e,t,a,l,r,s){const m=(0,i.up)("q-img"),c=(0,i.up)("q-card-section"),d=(0,i.up)("q-card"),u=(0,i.Q2)("close-popup");return(0,i.wg)(),(0,i.j4)(d,{style:(0,o.j5)(s.styleCard)},{default:(0,i.w5)((()=>[(0,i.wy)((0,i.Wm)(m,{style:(0,o.j5)(s.style),src:s.details.img},null,8,["style","src"]),[[u]]),(0,i.Wm)(c,null,{default:(0,i.w5)((()=>[(0,i._)("div",n,(0,o.zw)(s.details.name),1)])),_:1})])),_:1},8,["style"])}const r={props:["modo"],data(){return{noimg:this.$store.state.store.noimg}},computed:{details(){let e="solicitudes"==this.modo?this.$store.state.store.solicitudes:this.$store.state.store.amigos;return{img:this.$store.state.store.imgs[this.$store.state.store.otherId],name:e[this.$store.state.store.otherId].name}},style(){return{height:.5*this.$q.screen.height+"px",width:.85*this.$q.screen.width+"px"}},styleCard(){return{height:.628*this.$q.screen.height+"px",width:.85*this.$q.screen.width+"px"}}}};var s=a(151),m=a(4027),c=a(5589),d=a(677),u=a(7518),p=a.n(u);r.render=l;const g=r;p()(r,"components",{QCard:s.Z,QImg:m.Z,QCardSection:c.Z}),p()(r,"directives",{ClosePopup:d.Z})},4550:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p});var i=a(3673);function o(e,t,a,o,n,l){const r=(0,i.up)("listaamigos"),s=(0,i.up)("q-tab-panel"),m=(0,i.up)("listasolicitudes"),c=(0,i.up)("perfil"),d=(0,i.up)("q-tab-panels"),u=(0,i.up)("q-page");return e.$store.state.store.userDetails.userId?((0,i.wg)(),(0,i.j4)(u,{key:0,style:{"margin-top":"10px"}},{default:(0,i.w5)((()=>[(0,i.Wm)(d,{modelValue:e.opcion,"onUpdate:modelValue":t[0]||(t[0]=t=>e.opcion=t)},{default:(0,i.w5)((()=>[(0,i.Wm)(s,{name:"amigos"},{default:(0,i.w5)((()=>[(0,i.Wm)(r)])),_:1}),(0,i.Wm)(s,{name:"solicitudes"},{default:(0,i.w5)((()=>[(0,i.Wm)(m)])),_:1}),(0,i.Wm)(s,{name:"perfil"},{default:(0,i.w5)((()=>[(0,i.Wm)(c)])),_:1})])),_:1},8,["modelValue"])])),_:1})):(0,i.kq)("",!0)}var n=a(3617);const l={computed:{...(0,n.rn)("store",["opcion"])},components:{listaamigos:a(931).Z,listasolicitudes:a(3164).Z,perfil:a(9843).Z}};var r=a(4379),s=a(5906),m=a(6602),c=a(2496),d=a(7518),u=a.n(d);l.render=o;const p=l;u()(l,"components",{QPage:r.Z,QTabPanels:s.Z,QTabPanel:m.Z,QTabs:c.Z})}}]);