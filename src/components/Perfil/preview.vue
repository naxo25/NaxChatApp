<template>

  <q-dialog v-model='$store.state.store.changePre' :maximized='true'>

      <q-item class='' style='justify-content: center; align-items: center; background: rgb(255,255,255,.94);'>

        <!--loader-->
        <div v-if='value != 0'>
          <q-circular-progress
            show-value
            class="q-ma-md"
            :value="value"
            size="120px"
            color='blue'
            track-color="grey-9">
              <q-avatar size="100px">
                <img src="quasar-logo.svg">
              </q-avatar>
          </q-circular-progress>
        </div>

        <div v-else style="text-align: center;">

          <img
           id='preview' 
           style='width: 100%; border-radius: 50%; max-height: 15em; max-width: 15em;'
           :src='user.img != null ? user.img : noimg'       
          />

          <q-tabs style='height:6.5em'>
            <q-tab class="text-primary" icon="done" @click='click_onUpload' />
            <img 
              id='preview_min' 
              style='width:50px; height:50px; border-radius: 50%' 
              :src='user.img_thumb != null ? user.img_thumb : noimg'  
            />
            <q-tab class='text-red' icon='cancel' @click='changePre(false)' />
          </q-tabs>

          <q-tabs style='height:6.5em'>
            <q-tab class="text-blue" no-caps icon="photo_camera" label="Camara" @click='galeria(2)' />
            <q-tab class="text-orange-8" no-caps icon="photo" label="Galeria" @click='galeria(1)' />
            <q-tab class="text-red" no-caps icon="delete" label="Borrar" @click='galeria(3)' v-if='user.img' />
          </q-tabs>

        </div>

      </q-item>

  </q-dialog>

</template>

<script>
	import { mapActions, mapMutations } from 'vuex';
  import ImageTools from 'boot/redim.js';
  import { storageRef } from 'boot/firebase';

	export default {
    props: ['user'],
    data () { 
      return {
        noimg: '',
        imageData: null,
        ruta: '',
        value: 0,
        preview: '',
        preview_min: '',
      }
    },
    mounted(){
      this.noimg = this.$store.state.store.noimg;
    },
    methods: {
      ...mapActions('store', ['cambiar_foto_Perfil','borrarFotoPerfil']),
      ...mapMutations('store',['changePre']),
        
        galeria(op){
          this.ruta = 'Perfiles/' + this.user.email;
          if (op==1) {
            subir.click();
          } else if (op==2) {
            subirC.click();
            //this.captureImage();
          } else if (op==3) {
            this.deleteFoto();
          }
        },

        deleteFoto(){
          this.borrarFotoPerfil(this.ruta);
        },

        async click_onUpload(){
          this.preview = preview.src
          this.preview_min = preview_min.src
          await this.onUpload(1); //ejecutamos funcion  
          //await setTimeout(()=> { this.onUpload(2); }, 1600); //ejecutamos funcion  
        },

        onUpload(op){

          let ft;
          if (op == 1) 
            ft = this.preview;
          else {
            ft = this.preview_min;
            this.ruta+= '_thumb';
          }

          const uploadToStorage = (imageURL) => {
              var getFileBlob = function (url, cb) {
                  var xhr = new XMLHttpRequest();
                  xhr.open("GET", url);
                  xhr.responseType = "blob";
                  xhr.addEventListener('load', function() {
                    cb(xhr.response);
                  });
                  xhr.send();
              };

              getFileBlob(imageURL, blob =>{

                storageRef.child(this.ruta).put(blob).on('state_changed', snapshot =>{
                  let porcentaje = (snapshot.bytesTransferred / snapshot.totalBytes) * 50;
                  this.value+= porcentaje;
                }, error=>{ ()=> alert(error.message) },
                ()=>{
                    storageRef.child(this.ruta).getDownloadURL().then((url)=>{

                        if (op == 1){ 
                          this.cambiar_foto_Perfil({ item: 'imagen', img: url }); 
                          this.onUpload(2); //_Thumbnails}
                        }
                        else if (op == 2) { 
                          this.cambiar_foto_Perfil({ item: 'img_thumb', img_thumb: url }); 
                          this.value = 0; 
                          this.changePre(false);
                        }

                    }).catch( err => 
                        alert('Se ha producido un error, intente nuevamente') 
                    );
                });

              });
          }; 
          uploadToStorage(ft); //ejecutamos funcion  

        },

        captureImage () {

          navigator.camera.getPicture(onSuccess, onFail, { quality: 100,
          destinationType: Camera.DestinationType.FILE_URI, targetHeight: 350, targetWidth: 350 });

          function onSuccess(imageURI) {
              preview.src = imageURI;
          }

          function onFail(message) {
              alert('Failed because: ' + message);
          }

        },

    },

  }

</script>